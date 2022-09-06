FROM node:16 AS build

WORKDIR /var/www

COPY . .

RUN  yarn install \
  && yarn build

WORKDIR /var/www/apps/preview/remix

CMD ["yarn", "serve"]
