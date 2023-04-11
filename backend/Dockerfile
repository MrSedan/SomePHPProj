FROM php:8.2-fpm-alpine

WORKDIR /var/www/html

RUN apk update 

# RUN docker-php-ext-install pdo pdo_mysql mysqli
# RUN docker-php-ext-enable pdo_mysql

RUN rm -rf /var/cache/apk/*
COPY . ./api

EXPOSE 9000
CMD ["php-fpm"]