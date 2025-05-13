FROM node:22-bullseye
WORKDIR /
COPY . .
RUN npm install
EXPOSE 4002
CMD ["npm", "start" ]