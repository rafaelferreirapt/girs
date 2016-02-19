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

# https://docs.docker.com/engine/installation/linux/ubuntulinux/
apt-get install apt-transport-https ca-certificates
sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
echo "deb https://apt.dockerproject.org/repo ubuntu-wily main" > /etc/apt/sources.list.d/docker.list
apt-get update
apt-get -y install docker-engine
sudo service docker start

screen -R docker
docker pull ubuntu
sudo docker run hello-world

# to do next?
