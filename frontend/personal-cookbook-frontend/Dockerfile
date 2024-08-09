FROM node:20.11-alpine

RUN addgroup -S appgroup && adduser -S app -G appgroup

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm i -g @angular/cli
RUN npm i --force --quiet

COPY --chown=app:appgroup . .
RUN npm run build

USER app
EXPOSE 80
CMD ["node", "dist/analog/server/index.mjs"]