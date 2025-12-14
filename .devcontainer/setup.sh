#!/bin/bash

echo "Installing PHP extensions for Drupal..."

# Instalează dependențe pentru GD
sudo apt-get update
sudo apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libzip-dev \
    libwebp-dev

# Instalează extensii PHP necesare pentru Drupal
sudo docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp
sudo docker-php-ext-install -j$(nproc) gd
sudo docker-php-ext-install pdo_mysql
sudo docker-php-ext-install zip
sudo docker-php-ext-install opcache

# Instalează Composer
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
sudo chmod +x /usr/local/bin/composer

# Instalează dependențele Drupal
composer install

echo "✅ Setup complete!"