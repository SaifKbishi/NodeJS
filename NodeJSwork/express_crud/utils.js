const fs = require('fs');

const findUsers = () => {
 console.log("get all users");
 try{
  const dataBuffer = fs.readFileSync('./db/users.json');
  const dataJSON = dataBuffer.toString();
  return JSON.parse(dataJSON);
 }catch(e){return [];}
};


const create = (id, name, email) => {
 console.log('create new user')
 try{
  const users = findUsers();
  const finduser = users.find((user)=>{
   return user.id == id;
  });
  if(!finduser){
   users.push({
    id,
    name,
    email,
   });
   saveUsers(users);
  }else{
   console.log(`user with id=${id} already exist.`)
  }
 }catch(error){console.log(error,' creating user')}
 throw new Error("cannot create user");
}//create

const update = (id, name, email)=>{
 const users = findUsers();
 const finduser = users.find((user)=>{
  return user.id === id;
 });
 if(finduser){
  finduser.name = name;
  finduser.email = email;
  saveUsers(users);
 }else{
  console.log('user not found')
 }
}//update

const findUser = (id) => {
 console.log('from findUser');
 const users = findUsers();
 const finduser= users.find((user)=>{
  return user.id == id;
 });
 if (finduser){
  console.log('from findUser ID: ',finduser.id, 'name: ',finduser.name)
 }else{
  console.log('user not found')
 }
};

const saveUsers = (users)=>{
 const dataJSON = JSON.stringify(users)
 fs.writeFileSync('./db/users.json', dataJSON)
}//saveUsers

module.exports = {
 findUsers,
 create,
 findUser,
 update,
};
