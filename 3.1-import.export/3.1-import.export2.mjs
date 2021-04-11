import fs from 'fs';
//3.1 The major difference between require and import, is that require will automatically scan node_modules to find modules, but import, which comes from ES6, won't.

let str = "Hello world \n "
fs.writeFileSync('3_1_notes5.txt',str);
//node 3.1-import.export2.mjs

async function func(){
 const fs = await import('fs');
 console.log(fs)
}

func()














// cd bootcamp\BC_exercises\NodeJS 
// node 3.1-import.export.js