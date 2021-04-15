const express = require("express");
const app = express();
const { findUsers, findUser, create, update } = require("./utils");

app.use(express.json());//now express can understand JSON 

app.get("/api/users", (req, res) => {
  const users = findUsers();
  // res.status(200).json(users);
  // res.send(users);
  res.status(200).send(users);
  //res.status(200).json({ name: "pini", email: "dfhh@drf.com" });
});

app.get("/api/users/query/", (req, res) => {});


app.get("/api/users/:id", (req, res) => {//send params to get them
 console.log('req.params: ',req.params)
 const { id,name } = req.params; 
 console.log('16 id: ',id);

 const user = findUser(id);

 res.status(200).send(user);
});


//create a user
app.post("/api/users", (req, res) => {
  console.log('req.body',req.body,'this is from Post to create user');
  try {
    const createUser = create(req.body);
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});


//update a user
app.put("/api/users/:id", (req, res) => {
 const { id } = req.params;
 const user = req.body;
 const updateUser = update(req.body);
 res.status(201).send(updateUser);
 console.log(id, user);
});


//delete
app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("listening..");
});
