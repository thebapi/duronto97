#!/bin/bash
set -e
sleep 2
docker-compose build --force-rm
sleep 2
docker stack deploy  -c docker-compose.yml duranta --resolve-image "never" --prune
sleep 2
docker kill $(docker ps -q)
sleep 5
#docker system prune --volumes -f
sleep 2
docker stack services duranta