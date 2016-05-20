# container
# name: lb
# port: 8283 mapped to 80
# command: /bin/bash

# http://cloud.rafaelferreira.pt:8283/
# http://nginx.org/en/docs/http/load_balancing.html
# https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-load-balancing
apt-get update
apt-get install -y vim nginx
vim /etc/nginx/sites-available/default

###
upstream 192.168.215.20 { # we don't use 8283 here because 8283 is mapped to 80
  server 192.168.215.20:8281;
  server 192.168.215.20:8282;
}

server {
  location / {
    proxy_pass  http://192.168.215.20;
  }
}
###

service nginx start
