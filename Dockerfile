FROM oven/bun:latest as builder

WORKDIR /app

# Копируем только package.json
COPY package.json ./

# Устанавливаем зависимости без bun.lockb
RUN bun install

# Копируем весь проект и собираем приложение
COPY . .
RUN bun run build

FROM oven/bun:latest as runner

WORKDIR /app

# Копируем собранные файлы из builder
COPY --from=builder /* ./

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD ["bun", "start"]
