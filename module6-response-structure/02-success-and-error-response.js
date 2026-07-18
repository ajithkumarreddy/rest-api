/**
 * success response
 */

app.get("/users:id", (req, res) => {
  const userId = req.params.id;

  res.status(201).json({
    success: true,
    message: "User fetched successfully",
    data: {
      id: 1,
      name: "rama",
    },
  });
});

/**
 * error response
 */

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;

  res.status(404).json({
    success: false,
    message: "user not found",
  });
});
