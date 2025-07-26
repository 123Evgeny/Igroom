# igroom

## Запуск через Docker Compose

```bash
docker-compose up --build
```

Приложение будет доступно на [http://localhost:3000]

### Остановка контейнера

```bash
docker-compose down
```

## Локальный запуск (без Docker)

```bash

cd front
npm install
npm run dev
```

## Мок-данные

Если API недоступен или не возвращает все нужные данные, используется мок-объект профиля.  
Моки находятся в файлах `entities/profile/model`.  
Для временного использования моков — подмените функцию `fetchProfile` или используйте условие в React Query.

## Технологии

- Next.js (React + TypeScript, SSR, App Router)
- Tailwind CSS
- React Query
- Redux Toolkit
- Feature-Sliced Design (FSD)
- Zod (валидация и типизация)
- Docker, docker-compose

## Страница профиля

Профиль доступен по адресу: [http://localhost:3000/profile]

## Структура проекта

- `front/` — исходный код Next.js приложения
- `Dockerfile`, `docker-compose.yml` — контейнеризация
