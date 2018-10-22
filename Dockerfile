FROM node:8-alpine

COPY src/ src/
COPY package.json .

RUN npm install

CMD ["node", "src/index.js"]