const express = require("express");

// router
const router = express.Router();

// middleware
const validateUser = require("../middleware/validateUser");

// controller
const { getUsers, createUser } = require("../controllers/userController");

router.get("/", getUsers);

router.post("/", validateUser, createUser);

module.exports = router;
