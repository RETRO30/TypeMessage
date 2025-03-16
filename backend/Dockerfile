FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8000

RUN npx tsc

CMD ["node", "dist/index.js"]