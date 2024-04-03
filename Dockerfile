ARG NODE_VERSION=20.9.0

FROM node:${NODE_VERSION}-slim as base

ENV NODE_ENV=production

WORKDIR /src

# Build
FROM base as build

COPY package*.json ./
RUN npm install --production \
    && npm cache clean --force \
    && rm -rf /tmp/*

COPY  . .
COPY ./manifest.json /manifest.json
RUN npm run build


# Run
FROM base

EXPOSE 3001

COPY --from=build /src/.output /src/.output

CMD [ "node", ".output/server/index.mjs" ]
