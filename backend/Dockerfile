FROM node:22.13.1-alpine

USER node
WORKDIR /home/node/app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

CMD ["npm", "start"]
