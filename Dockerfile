FROM php:8.2-fpm AS php

RUN apt-get -y update && apt-get install -y \
      unzip \
      libpq-dev \
      libcurl4-gnutls-dev

RUN docker-php-ext-install pdo pdo_pgsql bcmath

RUN curl -sL https://deb.nodesource.com/setup_20.x | bash - 
RUN apt-get install -y nodejs

WORKDIR /var/www
COPY . .

COPY --from=composer:2.3.5 /usr/bin/composer /usr/bin/composer

ENV PORT=8000

RUN docker-php-ext-install mysqli pdo pdo_mysql

RUN npm install

RUN npm run build
# Add user for laravel application
RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www

RUN chown -R www:www /var/www

USER www

EXPOSE ${PORT} 

CMD [ "php-fpm" ]

ENTRYPOINT [ "Docker/entrypoint.sh" ]


# 
# ==============================================================================
#niginx

FROM nginx:1.27.3-alpine-slim AS nginx


WORKDIR /var/www

COPY --from=php /var/www /var/www



# 
# ==============================================================================
#R plumber

FROM rstudio/plumber:v1.0.0 AS r

RUN apt-get update -qq && apt-get -y --no-install-recommends install \
      unzip\ 
      libpq-dev\
      libcurl4-gnutls-dev


RUN R -e "install.packages(c('jsonlite', 'dplR'))"

EXPOSE 8002

COPY ./R/DendroSummary.R /R/

CMD [ "R/DendroSummary.R" ]




