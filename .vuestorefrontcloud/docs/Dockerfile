FROM node:16-alpine AS build

WORKDIR /var/www

RUN apk add --no-cache yarn
# needed because of turbo issue
# see: https://github.com/vercel/turbo/issues/2309#issuecomment-1288660455
RUN apk add --no-cache libc6-compat

COPY . .
RUN yarn
RUN yarn build:peer-next
RUN yarn build:docs

FROM nginx
COPY --from=build /var/www/apps/docs/components/.vuepress/dist /usr/share/nginx/html/v2
