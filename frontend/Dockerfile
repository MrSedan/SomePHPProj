FROM node:18-alpine as build
WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN yarn global add pnpm
RUN pnpm i
COPY . .
RUN pnpm build

COPY ./build /var/www/html