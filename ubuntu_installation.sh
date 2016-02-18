# we made an offline repository in one external disk
# http://askubuntu.com/questions/974/how-can-i-install-software-or-packages-without-internet-offline
# answer: A USB repository
sudo su
fdisk -l
# Disk /dev/sdb: 500.1 GB
mkdir /media/disk
mount /dev/sdb /media/disk/
mv /etc/apt/sources.list /etc/apt/sources.list.old
echo "deb [arch=amd64] file:/media/disk/mirror/archive.ubuntu.com/ubuntu trusty main restricted universe multiverse" > /etc/apt/sources.list
apt-get update
apt-get install -y docker.io

# to do next?
