FROM node:18-alpine
WORKDIR /shodat-node
ENV PATH="/shodat-node/node_modules/.bin:$PATH"
RUN npm install -g nodemon
COPY  package.json ./
COPY  package-lock.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD ["nodemon", "Server.js"]