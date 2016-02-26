sudo su
docker build -t ubuntu/girs .
docker rm test
docker run -d -it --memory="300M" --memory-reservation="300M" --memory-swap -1 --name test -t ubuntu /bin/bash
docker start test
docker attach test
