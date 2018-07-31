FROM node:alpine

EXPOSE 3000

ARG EDITION_ID=20
ARG BACKEND_API_URL=https://backoffice.gamers-assembly.net
ARG BACKEND_LOCAL_API_URL=http://drupal
ARG BASE_URL=https://testal.gamers-assembly.net
ARG CONTACT_PAGE_ID=6
ARG PRESSE_PAGE_ID=7
ARG LEGALS_PAGE_ID=8

WORKDIR /usr/src/client
COPY . .
RUN npm config set '@bit:registry' https://node.bitsrc.io
RUN npm install
RUN npm run-script build


CMD npm start
