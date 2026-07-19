// get users
const getUsers = (req, res) => {
  res.status(200).send("User fetched successfully");
};

// create user
const createUser = (req, res) => {
  const { name, email } = req.body;

  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: {
      name,
      email,
    },
  });
};

module.exports = {
  getUsers,
  createUser,
};
