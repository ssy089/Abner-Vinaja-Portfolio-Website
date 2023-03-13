FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install && find /app/node_modules/ ! -user root | xargs chown root:root
COPY . .
RUN npm run build-prod
CMD [ "npm", "start" ]