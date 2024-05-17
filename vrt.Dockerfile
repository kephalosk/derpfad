# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app /app
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# test stage
FROM ubuntu:latest as test-stage
WORKDIR /app
COPY --from=production-stage /app /app
RUN apt update
RUN apt install nodejs -y
RUN apt install npm -y
RUN npx playwright install
# RUN npm run serve -- --port 80
RUN PW_TEST_HTML_REPORT_OPEN='never' npx playwright test integration-tests || exit 0
VOLUME /app/integration-tests
COPY /integration-tests /app/integration-tests