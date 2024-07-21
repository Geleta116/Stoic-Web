
FROM node:16

WORKDIR /usr/src/server

COPY package*.json ./

RUN npm install

COPY wait-for-db.sh /wait-for-db.sh
RUN chmod +x /wait-for-db.sh


RUN apt-get update && apt-get install -y mariadb-client

COPY . .

CMD ["/wait-for-db.sh"]
