const express = require("express");
const cors = require("cors");

// middleware import
const logger = require("./middleware/logger");
const userRoutes = require("./routes/users");

// server
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(logger);

// routes
app.use("/users", userRoutes);

app.listen("3000", () => {
  console.log("Server is live on port 3000");
});
