FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g prisma
COPY . .
RUN npm run db:generate
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start:prod"]