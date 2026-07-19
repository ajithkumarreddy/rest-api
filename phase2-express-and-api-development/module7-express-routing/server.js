const express = require("express");
const cors = require("cors");

// routes
const usersRouter = require("./routes/users");

// server
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// router
app.use("/users", usersRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(400).json({
    success: false,
    message: err.message,
  });
});

// not found
app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(3000, () => {
  console.log("Server is live on port 3000");
});
