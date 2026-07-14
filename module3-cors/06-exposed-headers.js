const express = require("express");

// server
const app = express();

// By default, browsers only expose a limited set of response headers.
app.use(
  cors({
    exposedHeaders: ["X-Total-Count", "Authorization"],
  }),
);

/**
 * Output:
 * Access-Control-Expose-Headers:
 * Authorization, X-Total-Count (It is used to get total count of records for pagination)
 */
