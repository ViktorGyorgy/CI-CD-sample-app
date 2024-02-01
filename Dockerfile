FROM node
WORKDIR .

COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY src src/

RUN npm i
RUN ls
RUN npx tsc

CMD node ts-built/index