const express = require('express');
const request = require('request');
const hbs = require('hbs');

const app = express();
const url = 'http://gateway.marvel.com/v1/public/characters?ts=20210412&apikey=92f3931c476aa93ed57f8f64afc7ca79&hash=99c638818e5c5eabb8b70c3150c66fe1';

app.get('/', function(req, res) {
    request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    });
  });



app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})
