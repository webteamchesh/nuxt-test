ARG NODE_VERSION=20.9.0
FROM node:${NODE_VERSION}-slim as base

ARG PORT=3001
ENV PORT=$PORT

COPY ./manifest.json /manifest.json

WORKDIR /src
COPY  . .

EXPOSE 3001

RUN npm install
CMD [ "npm", "run", "dev"]

