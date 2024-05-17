FROM ubuntu:latest
ENV PW_TEST_HTML_REPORT_OPEN=never
WORKDIR /app
COPY package*.json ./
RUN apt update
RUN apt install nodejs -y
RUN apt install npm -y
RUN npx playwright install
RUN npm install
RUN apt install -y chromium-browser
RUN apt install -y firefox
RUN apt install -y libwebkitgtk-6.0-4
COPY . .
CMD ["npx", "playwright", "test", "integration-tests"]