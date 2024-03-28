ARG NODE_VERSION=20.9.0

FROM node:${NODE_VERSION}-slim as base

ARG PORT=3001

WORKDIR /src

COPY  . .

RUN npm install

ENV PORT=$PORT


CMD [ "npm", "run", "dev"]

