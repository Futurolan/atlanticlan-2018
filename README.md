# AtlanticLan Front
This repository contain the AtlanticLan website frontend.

It's build on fun technologies like:
- React Nextjs (https://github.com/zeit/next.js)
- Graphql (http://graphql.org/)

## Installation
```
npm install 
```

## Dev
With a local backoffice  
```
npm dev
```
Use the prod DB
```
BACKEND_API_URL=https://backoffice.gamers-assembly.com  EDITION=20 npm dev
```

## ARGS
- BASE_URL : https://test.gamers-assembly.com 
- BACKEND_API_URL: https://backoffice.gamers-assembly.com
- BACKEND_LOCAL_API_URL: SSR url for backoffice (optional)
- EDITION_ID: Nid of the edition on drupal 


## Reminder
- Change lib/config.js
- Change styles/color.scss
- Generate favicon on https://realfavicongenerator.net 
- Change the Dockerfile Args