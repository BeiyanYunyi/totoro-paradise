FROM node:lts-alpine
RUN apk add --update python3 build-base
WORKDIR /usr/src/app
COPY ["package.json", "pnpm-lock.yaml", ".npmrc", "./"]
RUN corepack enable && pnpm i --frozen-lockfile && rm -rf ~/.local/share/pnpm/store
COPY . .
RUN pnpm build && rm -rf node_modules pages server src .nuxt dist state
EXPOSE 3000
CMD ["pnpm", "start"]
