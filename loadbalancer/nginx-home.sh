# container
# name: lb
# port: 8283 mapped to 80
# command: /bin/bash

# http://nginx.org/en/docs/http/load_balancing.html
# https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-load-balancing
sudo apt-get update
sudo apt-get install -y vim nginx
sudo vim /etc/nginx/sites-available/default
sudo service nginx start

###
upstream cloud.rafaelferreira.pt  {
  server cloud.rafaelferreira.pt:8281;
  server cloud.rafaelferreira.pt:8282;
}

server {
  location / {
    proxy_pass  http://cloud.rafaelferreira.pt;
  }
}
###
