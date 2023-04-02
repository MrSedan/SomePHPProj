FROM ubuntu:latest
RUN apt-get update
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get install -y nginx php-fpm
ENV DEBIAN_FRONTEND=
COPY default /etc/nginx/sites-available/default
CMD service php8.1-fpm start && nginx -g "daemon off;"