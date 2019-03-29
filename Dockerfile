FROM node:10.15.3-alpine

WORKDIR /app
ADD src /app/src
ADD index.ts /app
ADD package.json /app
ADD package-lock.json /app

RUN npm i

CMD ["npm", "run", "start"]
