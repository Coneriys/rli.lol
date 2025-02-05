FROM oven/bun:1.1.4-alpine

WORKDIR /app
COPY . .

RUN bun install --production
RUN bun run build

CMD ["bun", "start"]
