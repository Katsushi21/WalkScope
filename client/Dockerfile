FROM node:18-alpine3.16 as builder
WORKDIR /client

COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .
RUN rm -rf node_modules && \
  yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:18-alpine3.16

WORKDIR /client

COPY --from=builder /client/build ./build
COPY --from=builder /client/package.json .
COPY --from=builder /client/node_modules ./node_modules

EXPOSE 5173

CMD ["yarn", "dev", "--", "--host"]