FROM php:8.2-apache

# Instalar extensiones necesarias
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Copiar configuración personalizada de Apache
COPY ./docker/apache.conf /etc/apache2/sites-available/000-default.conf

# Activar mod_rewrite (para URLs bonitas en MVC)
RUN a2enmod rewrite

# Copiar el proyecto a la carpeta de Apache
COPY . /var/www/html/

# Dar permisos
RUN chown -R www-data:www-data /var/www/html

WORKDIR /var/www/html

EXPOSE 80
