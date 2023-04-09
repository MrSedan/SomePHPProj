# 1 Set master image
FROM php:8.2-fpm-alpine

# 2 Set working directory
WORKDIR /var/www/html

# 3 Install Additional dependencies
RUN apk update 

# 4 Add and Enable PHP-PDO Extenstions
RUN docker-php-ext-install pdo pdo_mysql mysqli
RUN docker-php-ext-enable pdo_mysql

# 5 Install PHP Composer
#RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# 6 Remove Cache
RUN rm -rf /var/cache/apk/*

# 8 Copy existing application directory permissions
COPY . /var/www/html

# 10 Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]