FROM node:alpine

EXPOSE 3000

ARG EDITION_ID=20
ARG BACKEND_API_URL=https://backoffice.gamers-assembly.net
ARG BACKEND_LOCAL_API_URL=http://drupal
ARG BASE_URL=https://www.atlantic-lan.com

WORKDIR /usr/src/client
COPY . .
RUN npm install
RUN npm run-script build


CMD npm start
