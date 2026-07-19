const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("User fetched successfully");
});

router.post("/:id", (req, res, next) => {
  const userId = req.params.id;
  const sort = req.query.sort;

  if (!sort) {
    return next(new Error("sort is required"));
  }

  res.status(201).send(`User ${userId} created successfully`);
});

module.exports = router;
