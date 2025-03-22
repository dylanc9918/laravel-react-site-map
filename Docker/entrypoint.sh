#!/bin/bash
if [ ! -f "vendor/autoload.php" ]; then
    composer install --no-progress --no-interaction
fi

#check if .env file exists
if [ ! -f ".env" ]; then
    echo "Creating .env file"
    cp stack.env .env
else
    echo ".env file already exists"
fi

# Check if node_modules directory exists
if [ ! -d "node_modules" ]; then
    npm install
fi

php artisan config:clear
php artisan key:generate
php artisan cache:clear
php artisan config:cache
php artisan route:clear
php artisan view:clear


exec docker-php-entrypoint "$@"