const express = require("express");
const app = express();
const { findUsers, findUser, create } = require("./utils");

app.use(express.json());

app.get("/api/users", (req, res) => {
  const users = findUsers();
  res.status(200).json({ name: "pini", email: "dfhh@drf.com" });
});

app.get("/api/users/query/", (req, res) => {});

app.get("/api/users/:id/", (req, res) => {
  //   const { id } = req.params;
  //   const user = findUser(id);
  //   res.status(200).send(user);
});

app.post("/api/users", (req, res) => {
  console.log(req.body);
  try {
    const createUser = create(req.body);
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const user = req.body;
  console.log(id, user);
});

app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("listening..");
});
