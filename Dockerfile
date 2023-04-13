FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY ./server/config/site.dev.conf /etc/nginx/conf.d/default.conf
COPY ./backend /var/www/html/api

EXPOSE 80
