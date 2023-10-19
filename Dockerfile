FROM nginx:1.25.2-alpine-slim
COPY .output/public /var/www/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 5173
