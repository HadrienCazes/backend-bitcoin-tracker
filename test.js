const {
  Client
} = require('pg')

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'docker',
  port: 5432,
})

client.connect()

var query = 'SELECT * FROM bitcoin_dataset limit 1000'
client
  .query(query)
  .then(res => {
    console.log(res.rows)
    client.end();
  })
  .catch(e => console.error(e.stack))