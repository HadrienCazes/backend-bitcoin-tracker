In order to setup the DB for the back-end application, please install docker.
After that, run this command to setup the container that'll run the image of PostgreSQL:

sudo docker run --rm \
--name postgres -e POSTGRES_PASSWORD=docker \
-p 33:5432 \
-v /data/postgres:/var/lib/postgresql/data \
-d postgres


It means that the database will be accessible on port 33 and that it will be accessible through the following ID:
username: `postgres`
password: `docker`