FROM node:22-alpine
WORKDIR /app
COPY /.next pnpm-lock.yaml package.json /app/
RUN pnpm install

EXPOSE 5000
