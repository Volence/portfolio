#!/bin/sh
# If node_modules is empty remove the folder
if [ !"$(ls -A ./node_modules)" ]; then
    rm -rf ./node_modules
fi
docker build -t portfolio .
docker run --name portfolio -v "$(pwd)":/app/ -v node_modules:/node_modules/node_modules -p 3000:3000 portfolio /app/entrypoint.sh
