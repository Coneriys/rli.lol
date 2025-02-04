FROM oven/bun:1.0.0 as builder

WORKDIR /app

# Копируем только package.json
COPY package.json ./

# Устанавливаем зависимости без bun.lockb
RUN bun install

# Копируем весь проект и собираем приложение
COPY . .
RUN bun run build

FROM oven/bun:1.0.0 as runner

WORKDIR /app

# Копируем собранные файлы из builder
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD ["bun", "start"]
