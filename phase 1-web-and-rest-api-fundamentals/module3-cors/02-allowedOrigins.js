const express = require("express");

// server
const app = express();

// allowedOrigins
const allowedOrigins = ["http//localhost:5000", "http//localhost:5173"];

app.use(
  cors({
    origin: allowedOrigins,
  }),
);

/**
 * Output:
 * Access-Control-Allow-Origin: http://localhost:5173
 * or
 * Access-Control-Allow-Origin: http://localhost:5000
 */