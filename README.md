# Bitcoin Tracker Backend (Work in progress)

## **OLD**:


HOW IT WORKS: The current backend only reads the csv content from the dataset file and convert it to a json object that is usable by the front of the application.


Initially, I wanted to setup a docker environment to run PostgreSQL and to make a connection between the back and the docker image. 15/10/20


To get the node modules: `npm install`


In order to run the backend application, launch in the terminal : `nodemon/node server.js`


Please download the following dataset and put it at the root of the folder at /public to make the application work:
https://www.dropbox.com/s/v7crv32wa7dwpgk/bitcoin_dataset.csv?dl=0


The path is hard-coded so if changes are made to the name, please change it in the server.js part.

-----------------------------------------
## **UPDATED**: Implemented a connection to a dockerized pgsql

Please, run the following command to have a docker pgsql set:

`
sudo docker run --rm \
--name postgres -e POSTGRES_PASSWORD=docker \
-p 5432:5432 \
-v /data/postgres:/var/lib/postgresql/data \
-d postgres
`

I used `Datagrip` to add the data manually faster. I imported the bitcoin dataset (.csv) as a table called bitcoin_dataset. The query is still hardcoded, so please modify it accordingly.

**Remaining work**:

1. Create user table for authentification
2. Add authentification routes
3. Enforce a specific data type for routes with the middleware called Joi
4. Allow users to add / remove data when authenticated
