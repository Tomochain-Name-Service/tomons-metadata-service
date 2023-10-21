FROM node:18.18.2-bullseye
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

EXPOSE 8080

CMD [ "yarn", "start" ]
