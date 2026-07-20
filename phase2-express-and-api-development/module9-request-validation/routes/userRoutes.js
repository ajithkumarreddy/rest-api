const express = require("express");

const router = express.Router();

const { getUsers, createUser } = require("../controllers/userController");
const validate = require("../middleware/validate");
const { createUserSchema } = require("../validations/user.validation");

// get all users
router.get("/", getUsers);

// create new user
router.post("/", validate(createUserSchema), createUser);

module.exports = router;
