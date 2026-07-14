const express = require("express");

// server
const app = express();

/** 
 * This tells the browser to cache the preflight result for 1 hour, 
 * reducing unnecessary OPTIONS requests.
 */
app.use(
  cors({
    maxAge: 3600,
  }),
);
