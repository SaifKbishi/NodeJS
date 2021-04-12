const fs = require('fs');
const book= {
 title: 'ego',
 autheer: 'ryan'
}

//const bookJSON = JSON.stringify(book);
//fs.writeFileSync('1_json.json', bookJSON);

const dataBuffer= fs.readFileSync('1_json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.name);
console.log(data.planet);
console.log(data.age);

//changing the data
data.name="Saif";
data.age=39;
const personJSON = JSON.stringify(data);
fs.writeFileSync('1_json.json',personJSON)

//testing
const dataBuffer1= fs.readFileSync('1_json.json');
const dataJSON1 = dataBuffer1.toString();
const data1 = JSON.parse(dataJSON1);
console.log(data1.name);
console.log(data1.planet);
console.log(data1.age);


// cd bootcamp\BC_exercises\NodeJS 
// node 1_json.js