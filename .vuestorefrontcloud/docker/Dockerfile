FROM node:16 AS build

WORKDIR /var/www

COPY . .

RUN cd boilerplates/nuxt \
  && yarn \
  && yarn build-storybook \
  && npm i npx \
  && npx sb extract

FROM nginx

COPY .vuestorefrontcloud/docker/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /var/www/packages/vue/storybook-static /usr/share/nginx/html