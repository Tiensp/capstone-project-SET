FROM node:latest

WORKDIR /app


# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

CMD ["npm", "run", "start:staging"]