ARG NODE_VERSION=18.14.2

FROM node:${NODE_VERSION}-slim as base

ARG PORT=3001

ENV NODE_ENV=production
LABEL org.opencontainers.image.source="https://github.com/webTeamChesh/nuxtTest"

WORKDIR /src

# Build
FROM base as build

COPY --link package.json package-lock.json manifest.json .
RUN npm install --production=false

COPY --link . .

RUN npm run build
RUN npm prune

# Run
FROM base

ENV PORT=$PORT

COPY --from=build /src/.output /src/.output


CMD [ "node", ".output/server/index.mjs" ]
