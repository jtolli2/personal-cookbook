FROM node:20.11-alpine

RUN addgroup -S appgroup && adduser -S app -G appgroup

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm i -g @angular/cli
RUN npm i --force --quiet

COPY --chown=app:appgroup . .

# Must set build time environment variables here
ARG VITE_API_URL=http://localhost:3000
ENV VITE_API_URL $VITE_API_URL

RUN npm run build

USER app
EXPOSE 80
CMD ["node", "dist/analog/server/index.mjs"]