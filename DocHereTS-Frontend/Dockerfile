FROM node:18-alpine 

WORKDIR /usr/src/nodeapp

COPY package.json .

RUN npm i

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]