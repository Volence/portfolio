#!/bin/sh

cp -r /node_modules/node_modules/. /app/node_modules/
npm run build
npm start
