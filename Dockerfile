FROM node:16-alpine3.13
COPY --chown=node:node ./package.json ./package-lock.json /node_modules/
USER node
WORKDIR /node_modules
RUN npm i
COPY --chown=node:node . /app/
WORKDIR /app
