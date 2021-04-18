const express = require('express');
const app = express();
const PORT = 3001;
const {retrieveAll, addNew, findOneRecord, updateOneRecord, deleteOneRecord } = require("./utils");
app.use(express.json());//now express can understand JSON 
const entity = 'movie';

/**
 * this app will demo a Movies API CRUD
 */

//retrieve All records
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
app.put(`/api/${entity}s/:id`, (req, res)=>{
 console.log('req.params', req.body)
 const {id } = req.params;
 const {title, rating} = req.body;
 console.log('to send',id, title)
 const updateRecord = updateOneRecord(id, title,rating);
 res.status(200).send(updateRecord);
});

//delete one
app.delete(`/api/${entity}s/:title`, (req, res)=>{
 const {title} = req.params;
 const deleteRecord = deleteOneRecord(title);
 res.status(200).send(deleteRecord);
});

app.listen(PORT, ()=>console.log(`server listening to port ${PORT}`));




/**
 * http://127.0.0.1:3001/api/movies/
 * {
    "id": "{{$guid}}",
    "title": "F9" ,
    "rating": "5",
    "genre": ["Action", "Adventure", "Crime", "Thriller"],
    "length":"95"
}
{
 "id":"{{$guid}}",
 "title":"F93",
 "rating":5,
 "genre":"Action",
 "length":80
}
{
 "id":"{{$guid}}",
 "title":"Building the World",
 "rating":4,
 "genre":"Fantasy",
 "length":78
}
 */



