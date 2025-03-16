FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8000

RUN npx tsc

CMD ["node", "dist/index.js"]