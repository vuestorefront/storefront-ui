FROM node:16 AS build

WORKDIR /var/www

COPY . .

RUN cd boilerplates/nuxt \
  && yarn \
  && yarn run generate

FROM nginx

COPY .vuestorefrontcloud/test/docker/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build var/www/boilerplates/nuxt/dist /usr/share/nginx/html

RUN chown nginx:nginx /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]