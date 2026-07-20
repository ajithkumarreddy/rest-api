const express = require("express");
const { getUsers, createUser } = require("../controllers/userController");

const router = express.Router();

// get all users
router.get("/", getUsers);

// create new user
router.post("/", createUser);

module.exports = router;
