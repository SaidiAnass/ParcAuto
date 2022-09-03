FROM node:17-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install --force --save

COPY . .

EXPOSE 4000

CMD ["node", "server.js"]