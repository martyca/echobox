FROM martyca/alpinenodejs:latest
COPY . /var/workdir
EXPOSE 8080
WORKDIR /var/workdir
RUN npm install
CMD npm start
