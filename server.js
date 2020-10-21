const debug = require('debug')('app:startup');
const cors = require('cors');
const express = require('express');

const bitcoin_routes = require('./routes/bitcoin_routes');
const home = require('./routes/home');

const port = process.env.PORT || 3000;

// loading csv data
// let csvToJson = require('convert-csv-to-json');
// const pathData = './public/bitcoin_dataset.csv';
// const json = csvToJson.fieldDelimiter(',').getJsonFromCsv(pathData);

const app = express();

// to change to dynamic html
app.set('view engine', 'pug');

// router usage
app.use('/api/bitcoin', bitcoin_routes);
app.use('/', home);

app.use(cors());
app.use(express.json());

// to download the dataset if needed
// app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.send('Welcome to the backend API !');
// });

// app.get('/data', (req, res) => {
//     const jsonArray = []
//     console.log('Here is the json total length ', json.length);
//     for(let i=0; i<json.length/10000;i++){
//         jsonArray.push({
//             Date: json[i].Timestamp,
//             Weighted_Price: parseFloat(json[i].Weighted_Price)
//         });
//     }
//     res.send(jsonArray);
// })


// debug('Listening on port 3000...');
app.listen(port, () => {
    console.log(`Listening on port ${port} ...`);
});
