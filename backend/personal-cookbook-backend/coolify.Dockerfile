FROM node:18.16.0-alpine

WORKDIR /usr/src/app

ENV DB_HOST=localhost
ENV SCRAPER_API_HOST=localhost

COPY package*.json ./

RUN npm i -g @nestjs/cli

RUN npm i --force --quiet

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start:prod"]