sudo apt-get update
sudo apt-get install -y snmp snmp-mibs-downloader snmpd
sudo vim /etc/snmp/snmpd.conf
# https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-an-snmp-daemon-and-client-on-ubuntu-14-04
sudo usermod -aG docker snmp
sudo service snmpd restart
