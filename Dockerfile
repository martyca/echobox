FROM martyca/alpinenodejs:latest
COPY package.json /var/workdir/
COPY index.js /var/workdir/
EXPOSE 8080
WORKDIR /var/workdir
RUN npm install
CMD npm start
