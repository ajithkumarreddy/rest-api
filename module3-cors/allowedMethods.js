const express = require("express");

// server
const app = express();

// methods
const allowedMethods = ["GET", "POST", "PUT", "PATCH", "DELETE"];

app.use(
  cors({
    methods: allowedMethods,
  }),
);

/*
Output:
Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE
*/
