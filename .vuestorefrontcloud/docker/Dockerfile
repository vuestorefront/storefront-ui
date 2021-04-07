FROM node:12 AS build

WORKDIR /var/www

COPY . .

RUN cd packages/vue \
   && yarn \
   && yarn docs:build

FROM nginx

COPY .vuestorefrontcloud/docker/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /var/www/packages/vue/storybook-static /usr/share/nginx/html
