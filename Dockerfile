FROM node
WORKDIR .

COPY package.json .
COPY package-lock.json .
COPY ts-built ts-built/

RUN npm ci --production

CMD node ts-built/index