# container
# name: lb
# port: 80 mapped to 80
# command: /bin/bash

# http://cloud.rafaelferreira.pt:8283/
# http://nginx.org/en/docs/http/load_balancing.html
# https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-load-balancing
sudo apt-get update
sudo apt-get install -y vim nginx # not compiled by source, go to nginx_from_source to see
sudo vim /etc/nginx/sites-available/default

###
upstream 192.168.215.20  {
  server 192.168.215.20:8281;
  server 192.168.215.20:8282;
}

server {
  location / {
    proxy_pass  http://192.168.215.20;
  }
}
###
