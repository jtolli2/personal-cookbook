FROM node:20.11-alpine

RUN addgroup -S appgroup && adduser -S app -G appgroup

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm i -g @angular/cli
RUN npm i --force --quiet

# ARG MODE=production
# ARG VITE_API_URL
# ENV VITE_API_URL=${VITE_API_URL}

COPY --chown=app:appgroup . .
RUN npm run build --mode ${MODE}

USER app
EXPOSE 80
CMD ["node", "dist/analog/server/index.mjs"]