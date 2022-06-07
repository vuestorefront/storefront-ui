FROM node:16 AS build

WORKDIR /var/www

COPY . .

RUN cd boilerplates/nuxt \
  && yarn \
  && yarn storybook-build 

COPY --from=build /var/www/.nuxt-storybook.storybook /var/www/boilerplates/nuxt/.storybook

FROM nginx

COPY .vuestorefrontcloud/docker/default.conf /etc/nginx/conf.d/default.conf