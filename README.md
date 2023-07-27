docker swarm init --advertise-addr

docker swarm join --token SWMTKN-1-2svrxlf8tg9qv7std4sr5p02pvdzucazz0vp4p7kyuf2eq0kwy-cxjxysr6loprko95exwdqjl9x 192.168.0.16
https://github.com/argentinaluiz/nestjs-websocket.git

docker stack deploy -c ./docker-compose.yaml app

docker network create -d overlay traefik_network --attachable