FROM node
WORKDIR .

COPY package.json .
COPY package-lock.json .

RUN npm ci

CMD npx nodemon -L src/index.ts