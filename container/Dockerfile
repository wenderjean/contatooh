FROM alpine:3.2
MAINTAINER Wender Freese <wender.jean@gmail.com>

RUN apk add --update git
RUN apk add --update nodejs
RUN rm -rf /var/cache/apk/*

RUN mkdir -p /opt/contatooh
WORKDIR /opt/contatooh
RUN git clone https://github.com/wenderjean/contatooh.git .
RUN npm install -g bower
RUN bower install --allow-root
RUN npm install && npm run build

EXPOSE 3000

USER nobody
CMD ["node", "server.js"]
