#!/usr/bin/env bash
PORTS=$(docker ps | grep ">80/tcp" | grep "0.0.0.0:828" | awk '/ /{print $10}' | sed -r 's/[0.0.0.0:]+//g' | sed -r 's/->8\/tcp//') # ports
CONTAINERS=$(docker ps | grep ">80/tcp" | grep "0.0.0.0:82" | awk '/ /{print $1}') # containers
CONTAINER_I=0
for CONTAINER in $CONTAINERS
do
  # echo $CONTAINER
  # echo $CONTAINER_I
  CPU_CONTAINER[$CONTAINER_I]=$(docker stats --no-stream $CONTAINER | awk '/ /{print $2}' | grep "%" | sed -r 's/%//')
  # echo ${CPU_CONTAINER[$CONTAINER_I]}
  CONTAINER_I=$((CONTAINER_I+1))
done

CONTAINER_I=0
PORT_I=0
for PORT in $PORTS
do
  if [[ ${CPU_CONTAINER[$CONTAINER_I]} < ${CPU_CONTAINER[$PORT_I]} ]]; then
    PORT_I=$CONTAINER_I
  fi
  CONTAINER_I=$((CONTAINER_I+1))
done

PORT_I=$((PORT_I+1))
# echo "FINAL PORT:"
echo ${PORTS} | xargs  | cut -d\  -f ${PORT_I}
