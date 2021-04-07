FROM node:12 AS build

WORKDIR /var/www

COPY . .

RUN cd packages/vue \
#  && sed -i "/^module\.exports.*/a \  base: '\/amplience\/'," ./src/.vuepress/config.js \
#  && cat ./src/.vuepress/config.js \
#  && npm run build
   && yarn \
   && yarn docs:build

FROM nginx

COPY --from=build /var/www/packages/vue/storybook-static /usr/share/nginx/html/amplience