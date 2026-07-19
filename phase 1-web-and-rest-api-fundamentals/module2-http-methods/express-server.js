const express = require("express");
const cors = require("cors");

// server
const app = express();

app.use(express.json());
app.use(cors());

// GET
app.get("/users", (req, res) => {
  res.send("All users");
});

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ${userId}`);
});

// POST
app.post("/users", (req, res) => {
  const newUser = req.body;
  res.send(`User created with body: ${JSON.stringify(newUser)}`);
});

// PUT
app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const newUser = req.body;
  res.send(`User ${userId} replaced with body: ${JSON.stringify(newUser)}`);
});

// PATCH
app.patch("/users/:id", (req, res) => {
  const userId = req.params.id;
  const newUser = req.body;
  res.send(`User ${userId} updated with body: ${JSON.stringify(newUser)}`);
});

// DELETE
app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ${userId} deleted successfully`);
});

// HEAD
app.head("/users", (req, res) => {
  res.status(200).end();
});

// OPTIONS
app.options("/users", (req, res) => {
  res.set("Allow", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  res.sendStatus(204);
});

app.listen(3000, () => {
  console.log("Server is live on port 3000");
});
