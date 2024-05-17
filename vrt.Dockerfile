FROM ubuntu:latest
ENV PW_TEST_HTML_REPORT_OPEN=never
WORKDIR /app
COPY package*.json ./
RUN apt update
RUN apt install nodejs -y
RUN apt install npm -y
RUN npx playwright install
RUN npm install
RUN apt-get install libnss3\ libnspr4\ libatk1.0-0\ libatk-bridge2.0-0\ libcups2\ libatspi2.0-0\ libxdamage1\ libxkbcommon0\ libpango-1.0-0\ libcairo2\ libasound2
RUN apt-get install libxdamage1\ libgtk-3-0\ libpangocairo-1.0-0\ libpango-1.0-0\ libatk1.0-0\ libcairo-gobject2\ libcairo2\ libasound2
RUN apt-get install libgstreamer-1.0.so.0\ libgtk-3.so.0\ libgdk-3.so.0\ libpangocairo-1.0.so.0\ libpango-1.0.so.0\ libharfbuzz.so.0\ libcairo-gobject.so.2\ libcairo.so.2\ libicudata.so.70\ libicui18n.so.70\ libicuuc.so.70\ libxslt.so.1\ libepoxy.so.0\ liblcms2.so.2\ libwoff2dec.so.1.0.2\ libvpx.so.7\ libevent-2.1.so.7\ libopus.so.0\ libgstallocators-1.0.so.0\ libgstapp-1.0.so.0\ libgstbase-1.0.so.0\ libgstpbutils-1.0.so.0\ libgstaudio-1.0.so.0\ libgsttag-1.0.so.0\ libgstvideo-1.0.so.0\ libgstgl-1.0.so.0\ libgstcodecparsers-1.0.so.0\ libgstfft-1.0.so.0\ libwebpdemux.so.2\ libharfbuzz-icu.so.0\ libenchant-2.so.2\ libsecret-1.so.0\ libhyphen.so.0\ libmanette-0.2.so.0\ libflite.so.1\ libflite_usenglish.so.1\ libflite_cmu_grapheme_lang.so.1\ libflite_cmu_grapheme_lex.so.1\ libflite_cmu_indic_lang.so.1\ libflite_cmu_indic_lex.so.1\ libflite_cmulex.so.1\ libflite_cmu_time_awb.so.1\ libflite_cmu_us_awb.so.1\ libflite_cmu_us_kal16.so.1\ libflite_cmu_us_kal.so.1\ libflite_cmu_us_rms.so.1\ libflite_cmu_us_slt.so.1\ libxkbcommon.so.0\ libx264.so\
COPY . .
CMD ["npx", "playwright", "test", "integration-tests"]