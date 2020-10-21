const express = require('express');
const router = express.Router();
const {
  Client,
  Pool
} = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'docker',
  port: 5432,
})

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

// client.connect();

router.get('/:limit', (request, response) => {

  var value = [request.params.limit];
  var query = 'SELECT "Timestamp","Weighted_Price" FROM bitcoin_dataset limit $1';
  pool
    .connect()
    .then(client => {
      return client.query(query, value)
      .then(res => {
        response.send(res.rows);
        client.release();
      })
      .catch(e => console.error(e.stack))
    })
    
})



module.exports = router;