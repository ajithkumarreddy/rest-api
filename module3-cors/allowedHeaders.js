const express = require("express");

// server
const app = express();

// allowedHeaders
const headers = ["Content-Type, Authorization"];

app.use(
  cors({
    allowedHeaders: headers,
  }),
);
