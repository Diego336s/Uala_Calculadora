FROM php:8.2-apache

# Instalar extensiones necesarias
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Activar mod_rewrite para URLs amigables
RUN a2enmod rewrite

# Copiar configuración personalizada de Apache
COPY docker/apache.conf /etc/apache2/sites-available/000-default.conf

# Copiar el contenido del proyecto al directorio raíz de Apache
COPY . /var/www/html/

# Establecer el directorio de trabajo
WORKDIR /var/www/html

# Establecer permisos adecuados
RUN chown -R www-data:www-data /var/www/html

EXPOSE 80
