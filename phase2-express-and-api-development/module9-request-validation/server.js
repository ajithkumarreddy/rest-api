const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

// server
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
