FROM mcr.microsoft.com/playwright:v1.44.0-jammy
ENV BASE_PATH='http://derpfad/'
ENV PW_TEST_HTML_REPORT_OPEN=never
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npx playwright install
COPY . .
CMD ["npx", "playwright", "test", "integration-tests"]
