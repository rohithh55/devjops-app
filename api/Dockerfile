FROM node:20

WORKDIR /app

RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++

COPY package*.json ./

RUN npm install

COPY . .

RUN rm -rf node_modules
RUN npm install

EXPOSE 4000

CMD ["node","server.js"]
