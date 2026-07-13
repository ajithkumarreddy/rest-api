const express = require("express");

// server
const app = express();

// allow all requests
app.use(cors());

// or

app.use(
  cors({
    origin: "*",
  }),
);

/*
Output:
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET,POST,PUT,PATCH,DELETE
Access-Control-Allow-Headers: Content-Type
*/
