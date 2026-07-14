const express = require("express");

// server
const app = express();

// Allows cookies and authentication credentials to be sent.
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
