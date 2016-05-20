apt-get update
apt-get install -y git vim build-essential libc6 libpcre3 libpcre3-dev libpcrecpp0 libssl0.9.8 libssl-dev zlib1g zlib1g-dev lsb-base openssl libssl-dev  libgeoip1 libgeoip-dev  google-perftools libgoogle-perftools-dev libperl-dev  libgd2-xpm-dev libatomic-ops-dev libxml2-dev libxslt1-dev python-dev snmp snmp-mibs-downloader
cd /
git clone https://github.com/nginx/nginx.git

# alterar
vim nginx/src/http/ngx_http_upstream_round_robin.c

cd nginx

./auto/configure --sbin-path=/usr/local/nginx/nginx   --conf-path=/etc/nginx/nginx.conf --pid-path=/var/run/nginx.pid --with-debug  --with-select_module --with-poll_module --with-cpu-opt=CPU --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log

make && make install

#http://stackoverflow.com/questions/17413526/nginx-missing-sites-available-directory

mkdir /etc/nginx/sites-available
mkdir /etc/nginx/sites-enabled
vim /etc/nginx/nginx.conf
# add in http section: include /etc/nginx/sites-available/*;

sudo vim /etc/nginx/sites-available/default

# add:
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

# add the ubuntu upstart: https://www.nginx.com/resources/wiki/start/topics/examples/ubuntuupstart/#

vim /etc/init/nginx.conf
initctl reload-configuration

# start:
/usr/local/nginx/nginx

# stop:
kill -QUIT $( cat /var/run/nginx.pid )

ps aux | grep nginx
