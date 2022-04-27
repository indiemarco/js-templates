FROM node:16-alpine as builder
RUN npm i -g pnpm

WORKDIR /build
COPY pnpm-lock.yaml ./
RUN pnpm fetch
ADD . ./
RUN pnpm install -r --prefer-offline
RUN pnpm run build

FROM node:16-alpine
WORKDIR /app
COPY --from=builder /build/dist/index.js ./
COPY --from=builder /build/dist/index.js.map ./
ENTRYPOINT [ "node", "index.js" ]
