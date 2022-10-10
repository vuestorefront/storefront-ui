FROM node:16 AS build

WORKDIR /var/www

COPY . .

RUN  yarn install \
  && yarn build:next

WORKDIR /var/www/apps/preview/next

CMD ["yarn", "serve"]
