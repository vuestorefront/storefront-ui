FROM node:16 AS build

WORKDIR /var/www

COPY . .

ENV DOCS_EXAMPLES_REACT_PATH=https://docs.storefrontui.io/v2-rc-3-react
RUN  yarn install \
  && yarn build:next

WORKDIR /var/www/apps/preview/next

CMD ["yarn", "serve"]
