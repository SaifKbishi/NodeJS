const express = require('express');
const app = express();
const PORT = 3001;
const {retrieveAll, addNew, findOneRecord, updateOneRecord, deleteOneRecord } = require("./utils");
app.use(express.json());//now express can understand JSON 
const entity = 'movie'

/**
 * this app will demo a Movies API CRUD
 */

//get all
app.get(`/api/${entity}s`, (req, res)=>{
 const allRecords = retrieveAll();
 res.status(200).send(allRecords);
});

//find one record
app.get(`/api/${entity}s/:title`, (req, res)=>{ 
 const {title} = req.params;
 const findRecord = findOneRecord(title);
 res.status(200).send(findRecord);
});
// app.get(`/api/${entity}s/:id`, (req, res)=>{
//  const {id} = req.params; 
//  const findRecord = findOneRecord(id);
//  res.status(200).send(findRecord);
// });

//create one record
app.post(`/api/${entity}s`, (req, res)=>{
 console.log('req.body',req.body,'this is from Post to create new record');
 try{
  const createRecord = addNew(req.body);
  res.status(201).send(createRecord); //status 201 means successfully created an object by default 
 }catch(error){
  console.log('could not create new record');
  res.status(400).send({error: message});//whenever the user gives you bad data at the client you 
                                         //want to send a 400 error because that means there's something wrong with the
                                         //user input and not something wrong with your server
 }
});


//update one
app.patch(`/api/${entity}s/:id`, (req, res)=>{
 const updateRecord = updateOneRecord();
 res.status(200).send(updateRecord);
});

//delete one
app.delete(`/api/${entity}s/:id`, (req, res)=>{
 const deleteRecord = deleteOneRecord();
 res.status(200).send(deleteRecord);
});


app.listen(PORT, ()=>console.log(`server listening to port ${PORT}`))




/**
 * {
    "id": "{{$guid}}",
    "title": "F9" ,
    "rating": "5",
    "genre": ["Action", "Adventure", "Crime", "Thriller"],
    "length":"95"
}
 */