ARG NODE_VERSION=20.9.0
FROM node:${NODE_VERSION}-slim as base
WORKDIR /src
COPY  . .
RUN npm install
EXPOSE 3001
CMD [ "npm", "run", "dev"]

