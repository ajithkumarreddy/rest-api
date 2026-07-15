/**
 * Request body
 * req.body
 * 
 * The body carries actual data.
 * Usually with POST, PUT, PATCH
 */

const newUser = {
  name: "Rama",
  age: 26,
};

const express = require("express");

// server
const app = express();

// middleware
app.use(express.json());

app.post("/users", (req, res) => {
  const newUser = req.body;
  res.send("new user created");
});

app.listen(3000);
