#!/bin/bash
set -e

docker swarm init
# docker service rm registry
# docker service create --name registry --publish published=5000,target=5000 registry:2
# sleep 2
# docker stack rm services sabbar
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