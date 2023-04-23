FROM node:18-alpine3.16 as builder

WORKDIR /app

COPY ./package.json .
COPY ./yarn.lock .
COPY ./tsconfig.json .
RUN rm -rf node_modules && \
  yarn install --frozen-lockfile && \
  yarn cache clean

COPY . .

RUN yarn build

FROM node:18-alpine3.16

WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 5173

CMD ["yarn", "dev", "--host"]