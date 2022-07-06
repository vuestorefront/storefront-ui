FROM node:16 AS build

WORKDIR /var/www

COPY . .

RUN cd boilerplates/nuxt \
  && yarn \
  && yarn storybook-build 

FROM nginx

COPY .vuestorefrontcloud/docker/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build var/www/boilerplates/nuxt/storybook-static /var/www/boilerplates/nuxt/.nuxt-storybook
