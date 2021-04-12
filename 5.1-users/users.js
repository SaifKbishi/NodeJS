const uniqid = require('uniqid');
const fs = require('fs');

// Create add user command
const addUser = (id, name, email)=>{
 const users = loadUsers();
  const findUser = users.find((user)=>{
    return user.id === id;
  });
  if(!findUser){
   users.push({
    id: uniqid(),
    name: name,
    email: email,
   });
   saveUsers(users);
  }else{
   console.log('user already exists')
  }
}//addUser

// Create read user command
const readUser = (id)=>{
 const users = loadUsers();
 const findUser = users.find((user)=>{
  return user.id === id;
 });
 if(findUser){
  console.log('ID: ', findUser.id, 'name: ',findUser.name, 'Email: ',findUser.email)
 }else{
  console.log('user not found')
 }
}//readUser

//create upadte user command
const updateUser = (id, name, email)=>{
 const users = loadUsers();
 const findUser = users.find((user)=>{
  return user.id === id;
 });
 if(findUser){
  findUser.name = name;
  findUser.email = email;
  saveUsers(users);
 }else{
  console.log('user not found')
 } 
}//updateUser

const deleteUser =(id) =>{
 const users = loadUsers();
 const otherUser = users.filter((user)=>{
  console.log('filtering')
  return user.id !== id;
 });
 if(users.length > otherUser.length){
  console.log('user was deleted')
  saveUsers(otherUser);
 }else{
  console.log('user not found')
 } 
}//deleteUser


const loadUsers = ()=>{
 try{
  const dataBuffer = fs.readFileSync('./users.json');
  const dataJSON = dataBuffer.toString();
  return JSON.parse(dataJSON);
 } catch(e){
  return [];
 }
}//loadUsers
//node usersApp.js add --name="saif" --email="saif@saif.com"

const saveUsers = (users)=>{
 const dataJSON = JSON.stringify(users)
 fs.writeFileSync('users.json', dataJSON)
}//saveUsers

module.exports = {
 addUser: addUser,
 readUser:readUser,
 updateUser:updateUser,
 deleteUser:deleteUser
}


