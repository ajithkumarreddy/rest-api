const express = require("express");
const cors = require("cors");

// server
const app = express();

app.use(cors());
app.use(express.json());

// GET
app.get("/users", (req, res) => {
  res.send("All users");
});

app.get("/users/:id", (req, res) => {
  res.send(`User ${req.params.id}`);
});

// POST
app.post("/users", (req, res) => {
  const newUser = req.body;
  res.send("Create user ", newUser);
});

// start server
app.listen(3000, () => {
  console.log("Server is live on port 3000");
});
