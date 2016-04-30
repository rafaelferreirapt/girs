# container
# name: lb
# port: 8989 mapped to 80
# command: /bin/bash

# http://nginx.org/en/docs/http/load_balancing.html
# https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-load-balancing
sudo apt-get update
sudo apt-get install -y vim nginx
sudo vim /etc/nginx/sites-available/default

###
upstream 192.168.215.20  {
  server 192.168.215.20:8181;
  server 192.168.215.20:8182;
}

server {
  location / {
    proxy_pass  http://192.168.215.20;
  }
}
###