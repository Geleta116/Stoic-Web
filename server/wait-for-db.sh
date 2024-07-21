#!/bin/bash


while ! mariadb -h"$DB_HOST" -u"$DB_USER" -p"$DB_PASSWORD" -e "status" > /dev/null 2>&1; do
  echo "Database is not ready. Waiting..."
  sleep 2
done

echo "Database is ready!"

echo "Starting the server..."
exec npm start
