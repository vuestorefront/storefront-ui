FROM node:16 AS build

WORKDIR /var/www

COPY . .

ENV VITE_DOCS_EXAMPLES_REACT=https://docs.storefrontui.io/v2-react
RUN  yarn install \
  && yarn build:next

WORKDIR /var/www/apps/preview/next

CMD ["yarn", "serve"]
