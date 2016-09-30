FROM node:6.7.0

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app

COPY package.json $HOME/web/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/web
RUN npm cache clean && npm install --silent --progress=false

USER root
COPY . $HOME/web
RUN chown -R app:app $HOME/*
USER app

CMD ["npm", "start"]
