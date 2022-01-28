# ========= BUILD =========
FROM node:17-alpine3.14 as builder

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY . .

RUN npm run build

# ========= RUN =========
FROM caddy:alpine

COPY --from=builder /app/build /usr/share/caddy/
