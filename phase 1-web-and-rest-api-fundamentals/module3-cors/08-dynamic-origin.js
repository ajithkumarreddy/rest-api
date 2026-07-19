const express = require("express");

// server
const app = express();

const whitelist = ["http://localhost:5173", "https://myapp.com"];

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || whitelist.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  }),
);
