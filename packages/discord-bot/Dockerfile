FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

# RUN npx nx build --configuration=production

COPY ./dist/packages/discord-bot ./

CMD [ "node", "main.js" ]
