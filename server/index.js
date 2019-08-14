const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/index.js');

const app = express();

app.use(express.static('public'))
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('testing get request');
})



const port = 3000;
app.listen(port, () => {
  console.log(`App listening on ${port}`);
})
