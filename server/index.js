const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/index.js');

const app = express();

app.use(express.static('public/dist'))
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('testing get request');
})

app.get('/api/reviews', function (req, res){
  db.findTop3(function(err, data){
    if(err){
      console.log(err)
    }else{
      res.end(JSON.stringify(data));
    }
  })
})

const port = 3003;
app.listen(port, () => {
  console.log(`App listening on ${port}`);
})
