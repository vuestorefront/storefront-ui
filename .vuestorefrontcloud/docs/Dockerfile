FROM node:16-alpine AS build

WORKDIR /var/www

RUN apk add --no-cache yarn
COPY . .
RUN yarn && cd apps/docs/components && yarn build

FROM nginx
COPY --from=build /var/www/apps/docs/components/.vitepress/dist /usr/share/nginx/html/v2
