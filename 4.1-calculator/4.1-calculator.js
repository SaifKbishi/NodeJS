const chalk = require('chalk');
const yargs = require('yargs');

const greenMsg = chalk.blue.inverse.bold('Success');
console.log(greenMsg);
//console.log(process.argv[2]);
//const command = process.argv[2];

//console.log(process.argv);
//create a dd command
// yargs.command({
//  command: 'add',
//  describe: 'add something',
//  builder:{
//   title:{
//    describe: 'a tilte',
//    demandOption: true,
//    type: 'string'
//   },
//  },
//  handler: function(argv){
//   console.log('adding a new something 2:', argv.title )
//  }
// }); 

yargs.command({
 command: 'calc',
 describe: 'calculating something.',
 builder:{
  add:{
   describe: 'add',
   type: 'array'
  },
  sub:{
   describe: 'sub',
   type: 'array'
  },
  mult:{
   describe: 'mult',
   type: 'array'
  },
  pow:{
   describe: 'pow',
   type: 'array'
  },
 },
 handler: function(argv){
  if(argv.add) console.log('adding here', argv.add[0] + argv.add[1])
  else if(argv.sub) console.log('subbing here', argv.sub[0] - argv.sub[1])
  else if(argv.mult) console.log('multiplaying here', argv.mult[0] * argv.mult[1])
  else if(argv.pow) console.log('powering here', argv.pow[0] * argv.pow[0])
 }
});


yargs.parse()
//console.log(yargs.argv);









// if(command === 'add'){
//  console.log('add')
// }else if(command === 'sub'){
//  console.log('sub')
// }else if(command === 'multi'){
//  console.log('multi')
// }else if(command === 'pow'){
//  console.log('pow')
// }

// cd bootcamp\BC_exercises\NodeJS\4.1-calculator
// node 4.1-calculator.js