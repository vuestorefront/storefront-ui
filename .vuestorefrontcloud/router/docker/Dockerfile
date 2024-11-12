FROM nginx

ARG TARGET_DOMAIN

ENV TARGET_DOMAIN=$TARGET_DOMAIN

COPY .vuestorefrontcloud/router/docker/default.conf.template /etc/nginx/conf.d/default.conf.template

RUN envsubst < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf
