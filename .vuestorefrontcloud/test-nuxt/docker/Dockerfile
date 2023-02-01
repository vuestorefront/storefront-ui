FROM node:16 AS build

WORKDIR /var/www

COPY . .

ENV VITE_DOCS_EXAMPLES_VUE_PATH=https://docs.storefrontui.io/v2-vue
RUN  yarn install \
  && yarn build:nuxt

WORKDIR /var/www/apps/preview/nuxt

CMD ["yarn", "serve"]
