FROM nginx
COPY ./.output/public /var/www/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 5173
