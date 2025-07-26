# Используем официальный Node.js образ
FROM node:20-alpine

# Рабочая директория внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json
COPY front/package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы приложения
COPY front/ .

# Собираем Next.js приложение
RUN npm run build

# Открываем порт 3000
EXPOSE 3000

# Запускаем Next.js в production
CMD ["npm", "start"] 