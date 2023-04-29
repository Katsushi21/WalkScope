FROM node:18-alpine3.16 as builder

WORKDIR /app

COPY ./package.json .
RUN rm -rf node_modules && \
  yarn install --frozen-lockfile && \
  yarn cache clean

COPY . .

EXPOSE 5173

CMD ["yarn", "dev", "--host"]