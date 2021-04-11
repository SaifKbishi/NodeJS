const fs = require('fs');
const chalk = require('chalk');

//let str = "fs commands \n\nfs.copyFileSync('notes.text', 'destination.txt'); \n fs.renameSync('notes.text', 'notes2.txt'); \nconst folder = './'; \nfs.readdirSync(folder).forEach(file => { console.log(file);});\nfs.appendFileSync('notes.text','this is the appeend');"
//fs.writeFileSync('3_1_notes.txt',str);

//const firstName = require('./externalFile.js'); // from same folder
//console.log(firstName);

 //const add = require('./externalFile.js'); // from same folder
// console.log(add(2,3));

//const getNotes = require('./notes.js'); // from same folder
//console.log(getNotes());

//import vs require
// no ES6 -> require
//ES6 import

console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
console.log(Object.getOwnPropertyNames(global))
console.log(Buffer);
//3.1 The major difference between require and import, is that require will automatically scan node_modules to find modules, but import, which comes from ES6, won't.
//3.2 in 3.1-import.export2.mjs

//3.3 __filename and __dirname

const {add, sub, multi, div} = require('./externalFile.js'); // from same folder
console.log(add(2,3));
console.log(sub(2,3));
console.log(multi(2,3));
console.log(div(6,3));





// cd bootcamp\BC_exercises\NodeJS 
// node 3.1-import.export.js