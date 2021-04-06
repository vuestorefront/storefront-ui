FROM node:12 AS build

WORKDIR /var/www

COPY . .

RUN npm install \
#  && sed -i "/^module\.exports.*/a \  base: '\/amplience\/'," ./src/.vuepress/config.js \
#  && cat ./src/.vuepress/config.js \
#  && npm run build
   && cd packages/vue \
   && yarn docs:build

FROM nginx

COPY --from=build /var/www/src/.vuepress/dist /usr/share/nginx/html/amplience