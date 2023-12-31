# path: ./Dockerfile.prod

FROM node:18-alpine as build
# Installing libvips-dev for sharp Compatibility
# RUN apk update && apk add build-base gcc autoconf automake zlib-dev libpng-dev vips-dev && rm -rf /var/cache/apk/* > /dev/null 2>&1
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
RUN apk add --no-cache libc6-compat
WORKDIR /opt/
COPY ./package.json ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN npm install sharp
RUN npm install
WORKDIR /opt/app
COPY ./ .
RUN npm run build


FROM node:18-alpine
# RUN apk add vips-dev
RUN rm -rf /var/cache/apk/*
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/app
COPY --from=build /opt/node_modules ./node_modules
ENV PATH /opt/node_modules/.bin:$PATH
COPY --from=build /opt/app ./
EXPOSE 1337
CMD ["npm", "start"]
