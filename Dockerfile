FROM nginx:alpine

COPY index.html /usr/share/nginx/html/

RUN chown nginx:nginx /usr/share/nginx/html/index.html

EXPOSE 80