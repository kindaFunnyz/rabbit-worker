FROM node:22

WORKDIR /usr/src/app

# 1. Скопировать package.json + lockfile
COPY package*.json ./

# 2. Установить ВСЕ зависимости (включая dev)
RUN npm install --legacy-peer-deps

# 3. Скопировать проект (кроме node_modules)
COPY . .

# 4. Открыть порт
EXPOSE 3000

# 5. Запуск в dev-режиме
CMD ["npm", "run", "start:dev"]
