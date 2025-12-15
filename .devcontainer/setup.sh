#!/bin/bash

echo "🚀 Setting up Drupal development environment..."

# Instalează Composer
echo "📦 Installing Composer..."
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
sudo chmod +x /usr/local/bin/composer

# Instalează dependențe pentru GD
echo "🎨 Installing GD dependencies..."
sudo apt-get update
sudo apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libwebp-dev \
    libzip-dev

# Instalează extensii PHP
echo "🔧 Installing PHP extensions..."
sudo docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp
sudo docker-php-ext-install -j$(nproc) gd
sudo docker-php-ext-install pdo_mysql
sudo docker-php-ext-install zip
sudo docker-php-ext-install opcache

# Activează GD
echo "extension=gd.so" | sudo tee /usr/local/etc/php/conf.d/docker-php-ext-gd.ini

# Instalează dependențele Drupal
echo "📚 Installing Drupal dependencies..."
composer install

echo "✅ Setup complete! Happy coding! 🎉"