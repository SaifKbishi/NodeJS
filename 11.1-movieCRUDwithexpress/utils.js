const fs = require('fs');
const DB = './db/movies.json'
const entity = 'movie';

//Add new entity
const addNew = (argv)=>{
console.log('try to ADD new record');
try{
 const movies = retrieveAll();
 const findMovie = movies.find((movie)=>{
  return movie.id == argv.id;
 });
 if(!findMovie){  
  movies.push({
   id:argv.id,
   title:argv.title,
   rating: argv.rating,
   genre: argv.genre,
   length: argv.length
  });
  saveRecords(movies);
 }else{
  console.log(`coudl not find ${entity} with ID ${argv.id}`)
 }
}catch(error){
 console.log(`could not create a NEW ${entity},: ${error}`)
}
}//addNew

//retrieve all records
const retrieveAll = ()=>{
 console.log('retrieving ALL records');
 try{
  const dataBuffer = fs.readFileSync(`${DB}`);
  const dataJSON = dataBuffer.toString();
  return JSON.parse(dataJSON);
 }catch(e){return [];}
}//retrieveAll

//retrieve ONE record
const findOneRecord = (argv)=>{
 console.log(`try to FIND one record with Tilte:${argv}`);
 const movies = retrieveAll(); 
 const findMovie = movies.find((movie)=>{
  // return movie.id == argv.id;
  return movie.title == argv;
 });
 if(findMovie){
   // console.log(`movie with ID: ${argv.id} is found`);
   console.log(`movie with Title: ${argv} is found`);
   console.log(` Tilte: ${findMovie.title}, \n Rating: ${findMovie.rating}, \n Genre: ${findMovie.genre}, \n Length in minutes: ${findMovie.length}`)
   
   const dataBuffer = fs.readFileSync(`${DB}`);
   const dataJSON = dataBuffer.toString();
   const recordObj = JSON.parse(dataJSON);
   return recordObj.find((movie)=>{return movie.title == argv;});   
  }else{
   //console.log(`movie with ID: ${argv.id} could NOT be found`);
   console.log(`movie with ID: ${argv.title} could NOT be found`);
  }
}//findOneRecord

//update one record
const updateOneRecord = (id, title, rating)=>{
 console.log('try to UPDATE one record', id, title, rating);
 const movies = retrieveAll();
 const findMovie = movies.find((movie)=>{
  return movie.id == id;
 });
 if(findMovie){//movie found
  findMovie.title = title;
  saveRecords(movies);
 }else{
  console.log(`movie with tilte ${title} could not be found`)
 }
}//updateOneRecord

//delete one record
const deleteOneRecord = (argv)=>{
 console.log('try to DELETE one record');
 const movies = retrieveAll();
 const findMovie = movies.find((movie)=>{
  return movie.title == argv
 });
 if(findMovie){//movie found
  const moviesToKeep = movies.filter((movie)=>{
   return movie.title !== argv;
  });
  saveRecords(moviesToKeep);
 }else{
  console.log(`movie with tilte ${argv.title} could not be found`)
 }
}
const saveRecords = (movies) =>{
 const dataJSON = JSON.stringify(movies);
 fs.writeFileSync(`${DB}`, dataJSON);
}//saveRecords

module.exports = {
 retrieveAll,
 addNew,
 findOneRecord,
 updateOneRecord,
 deleteOneRecord
};