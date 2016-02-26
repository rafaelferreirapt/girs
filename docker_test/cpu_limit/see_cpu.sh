docker run -d -it --name test --cpuset-cpus="1" -t ubuntu /bin/bash
docker start test
docker attach test

apt-get update
apt-get install -y stress
