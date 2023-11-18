FROM node:20-alpine

LABEL maintainer=RWCannell

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]