# container
# name: app1-app2
# port: 8281 mapped to 80 - 8282 mapped to 80
# command: /bin/bash
apt-get update
apt-get install -y apache2 php5 libapache2-mod-php5 vim
cd /var/www/html/
rm index.html
vim index.php

service apache2 start
