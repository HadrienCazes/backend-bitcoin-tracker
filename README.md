HOW IT WORKS: The current backend only reads the csv content from the dataset file and convert it to a json object that is usable by the front of the application.


Initially, I wanted to setup a docker environment to run PostgreSQL and to make a connection between the back and the docker image.


To get the node modules: `npm install`


In order to run the backend application, launch in the terminal : `nodemon/node server.js`


Please download the following dataset and put it at the root of the folder at /public to make the application work:
https://www.dropbox.com/s/v7crv32wa7dwpgk/bitcoin_dataset.csv?dl=0


The path is hard-coded so if changes are made to the name, please change it in the server.js part.