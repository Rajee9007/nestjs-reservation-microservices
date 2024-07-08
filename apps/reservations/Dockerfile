FROM node:alpine As development

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json tsconfig.json
COPY nest-cli.json nest-cli.json
COPY apps/reservations/prisma ./prisma

RUN npm install -g yarn --force

RUN yarn install

RUN yarn prisma generate

COPY apps/reservations apps/reservations
COPY libs libs

RUN cd apps/reservations && yarn install

RUN yarn build reservations

FROM node:alpine As production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN npm install -g yarn --force

RUN yarn install

COPY --from=development /usr/src/app/dist ./dist

CMD ["yarn", "start:prod", "dist/apps/reservations/main"]
