FROM node:22.13.1-alpine

USER node
WORKDIR /home/node/app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY ./src ./src
COPY tsconfig.json .
COPY ./prisma ./prisma

CMD ["npm", "start"]
