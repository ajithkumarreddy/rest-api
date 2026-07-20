const getUsers = (req, res) => {
  res.status(200).send("All users fetched successdully");
};

const createUser = (req, res) => {
  const { name, email } = req.body;

  res.status(201).json({
    name,
    email,
  });
};

module.exports = {
  getUsers,
  createUser,
};
