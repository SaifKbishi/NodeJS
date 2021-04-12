const yargs = require('yargs');
const users = require('./users.js');


// Create add user command
yargs.command({
 command: 'add',
 describe: 'Add a new user',
 builder: {
  name: {
   describe: 'user name',
   demandOption: true,
   type: 'string'
  },
  email: {
   describe: 'email',
   demandOption: true,
   type: 'string'
  }
 },
 handler: function (argv) {
  users.addUser(argv.id, argv.name, argv.email)
 }
})

// Create Read user command
yargs.command({
 command: 'read',
 describe: 'read user',
 builder: {
  id:{
   describe: 'user ID',
   demandOption: true,
   type: 'string'
  },
 },
 handler: (argv)=>{
  users.readUser(argv.id);
 }
});

// Create Update user command
yargs.command({
 command: 'update',
 describe: 'update user',
 builder:{
  name: {
   describe: 'user name',
   demandOption: false,
   type: 'string'
  },
  email: {
   describe: 'email',
   demandOption: false,
   type: 'string'
  }
 },
 handler: (argv)=>{
  users.updateUser(argv.id, argv.name, argv.email);
 }
});


// Create Delete user command
yargs.command({
 command: 'delete',
 describe: 'delete user',
 builder: {
  id:{
   describe: 'user ID',
   demandOption: true,
   type: 'string'
  },
 },
 handler: (argv)=>{
  users.deleteUser(argv.id);
 }
});



yargs.parse();


// cd 5.1-users
//node 