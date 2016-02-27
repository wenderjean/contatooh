FROM alpine:3.2
MAINTAINER Wender Freese <wender.jean@gmail.com>

RUN apk add --update nodejs && rm -rf /var/cache/apk/*

RUN mkdir -p /opt/contatooh

COPY . /opt/contatooh
WORKDIR /opt/contatooh

RUN npm install -g bower && bower install --allow-root
RUN npm install && npm run build

EXPOSE 3000

USER nobody
CMD ["node", "server.js"]
