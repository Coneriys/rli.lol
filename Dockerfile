# Этап сборки
FROM oven/bun:latest as builder

WORKDIR /app

# Копируем package.json и bun.lockb для установки зависимостей
COPY package.json ./
COPY bun.lock ./

# Устанавливаем зависимости
RUN bun install

# Копируем весь проект и собираем приложение
COPY . .
RUN bun run build

# Финальный этап
FROM oven/bun:latest as runner

WORKDIR /app

# Копируем только необходимые файлы из builder
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json


ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD ["bun", "start"]
