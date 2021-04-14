const http = require('http')
const url = 'http://gateway.marvel.com/v1/public/characters?ts=20210412&apikey=92f3931c476aa93ed57f8f64afc7ca79&hash=99c638818e5c5eabb8b70c3150c66fe1';

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log('body here: ',body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()




/*** */
// const request = require('request');
// const axios = require('axios');

// const url = 'http://gateway.marvel.com/v1/public/characters?ts=20210412&apikey=92f3931c476aa93ed57f8f64afc7ca79&hash=99c638818e5c5eabb8b70c3150c66fe1';

// request({url:url}, (error, response)=>{
//  const data = JSON.parse(response.body);
//  //console.log(response.body)
//  // console.log(data)
//  console.log('data from request:',data.data.results.id=1010870)
// })


// const moviesFetch = async ()=>{
//  console.log('from axios')
//  const {data} = await axios.get(url);
//  console.log('data from axios',data.data.results.id=1010870)
// }
// moviesFetch();
