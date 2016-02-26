docker run -d -it --name geek_bench -t ubuntu /bin/bash
docker start geek_bench
docker attach geek_bench

! in the mac book
scp Downloads/Geekbench-3.4.1-Linux.tar.gz girs1:~

! in the host
docker cp Geekbench-3.4.1-Linux.tar.gz geek_bench:/home

! in the container
tar -zxvf Geekbench-3.4.1-Linux.tar.gz
cd dist/Geekbench-3.4.1-Linux/
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install -y libc6:i386 libncurses5:i386 libstdc++6:i386

! bench

./geekbench_x86_32
