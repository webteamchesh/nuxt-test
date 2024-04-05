ARG NODE_VERSION=20.9.0
LABEL org.opencontainers.image.source="https://github.com/webTeamChesh/nuxt-test"
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
RUN npm run build

# Run
FROM base
ENV PORT=3001
EXPOSE 3001

COPY --from=build /src/.output /src/.output
COPY ./manifest.json /manifest.json
CMD [ "node", ".output/server/index.mjs" ]
