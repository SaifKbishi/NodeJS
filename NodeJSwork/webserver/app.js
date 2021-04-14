const express = require('express');
const path = require('path');
const hbs = require('hbs');

//console.log(path.join(__dirname, './public'))

const app = express();

//define path for express config
const publicDirPath = path.join(__dirname, './public');
//to change the default path to views dir
const viewPath = path.join(__dirname, './templates/views');
const partialsPath = path.join(__dirname, './templates/partials');


//setup handlebars engine and views location
app.set('view engine','hbs');
app.set('views', viewPath);
//app.set('partials', partialsPath);
hbs.registerPartials(partialsPath);

//setup static dir to serve
app.use(express.static(publicDirPath));

app.get('', (req, res)=>{
 res.render('index',{
  title: 'Home - HBS file',
  name: 'Saif'
 })
});

app.get('/about', (req, res)=>{
 res.render('about',{
  title: 'About - HBS file',
  name: 'Saif'
 })
});
app.get('/help', (req, res)=>{
 res.render('help',{
  title: 'Help - HBS file',
  name: 'Saif'
 })
});

//this code is not going to run anymore because of the static content above
// app.get('', (req, res) => {
//     res.send('<h1>Hello Weather2</h1>');
// })

app.get('/helpJSON', (req, res) => {
    res.send([{name: 'saif', age: 55},{name: 'saif2', age: 5}]);
})

// app.get('/about', (req, res) => {
//     res.send('<h1>About</h1>');
// })

app.get('/weather', (req, res) => {
    res.send('Your weather');
})
app.get('/myweather', (req, res) => {
 res.send('my weather');
})


app.get('*', (req, res) => {
 res.send('404 page not found');
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})