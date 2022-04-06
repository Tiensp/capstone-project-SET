FROM node:latest

WORKDIR /app


# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g 
COPY . ./
RUN npm run build

CMD ["npm", "run", "start:staging"]