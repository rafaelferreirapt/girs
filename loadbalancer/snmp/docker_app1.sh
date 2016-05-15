#!/usr/bin/env bash
PORTS=$(sudo docker ps | grep ">80/tcp" | grep "0.0.0.0:8281" | awk '/ /{print $10}' | sed -r 's/[0.0.0.0:]+//g' | sed -r 's/->8\/tcp//') # ports
CONTAINER=$(sudo docker ps | grep ">80/tcp" | grep "0.0.0.0:8281" | awk '/ /{print $1}') # containers
CPU_CONTAINER=$(sudo docker stats --no-stream $CONTAINER | awk '/ /{print $2}' | grep "%" | sed -r 's/%//')
echo ${CPU_CONTAINER}
