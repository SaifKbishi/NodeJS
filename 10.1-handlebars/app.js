const express = require('express');
const nodemon = require('nodemon');

const app = express();

app.get('', (req, res) => {
    res.send('<h1>Hello Weather</h1>');
})

app.get('/helpJSON', (req, res) => {
    res.send([{name: 'saif', age: 55},{name: 'saif2', age: 5}]);
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
})

app.get('/weather', (req, res) => {
    res.send('Your weather');
})
app.get('/myweather', (req, res) => {
 res.send('my weather');
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})