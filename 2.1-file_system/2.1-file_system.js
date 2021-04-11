const fs = require('fs');

//fs.writeFileSync('notes.text','this file was created');


//fs.copyFileSync('notes.text', 'destination.txt');

//fs.renameSync('notes.text', 'notes2.txt');


// const folder = './';
// fs.readdirSync(folder).forEach(file => {
//  console.log(file);
// });


fs.appendFileSync('notes.text','this is the appeend');



// cd bootcamp\BC_exercises\NodeJS 
// node 2.1-file_system.js