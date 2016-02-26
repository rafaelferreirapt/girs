cd /sys/fs/cgroup/memory/docker/{CONTAINER_ID}
while true; do echo -n "Mem Usage (mb): " && expr `cat memory.usage_in_bytes` / 1024 / 1024; echo -n "Mem+swap Usage (mb): " && expr `cat memory.limit_in_bytes` / 1024 / 1024; sleep 1; done
