#!/bin/bash

sudo rm -rf data/ log/ ;
docker container stop $(docker container ls -aq) ;
docker system prune -af --volumes ;
docker system prune ;
docker container prune ;
docker image prune ;
docker volume prune ;
docker network prune 
