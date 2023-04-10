FROM node:lts-alpine

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-*.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

RUN npm install -g serve

EXPOSE 3000

CMD [ "serve", "-s", "build" ]