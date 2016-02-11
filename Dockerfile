FROM node:5.6.0

RUN npm install -g webpack
RUN npm install -g webpack-dev-server

ENV APP_HOME /app
RUN mkdir -p $APP_HOME

WORKDIR $APP_HOME

ADD ./package.json package.json
RUN npm install

COPY . $APP_HOME

EXPOSE 8080
CMD ["webpack-dev-server", "--progress", "--colors"]
