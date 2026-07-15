/**
 * URL params
 * req.params
 *
 * These are the values embedded inside the URL
 * GET /users/15
 */

app.get("/users/:id", (req, res) => {
  console.log(req.params);

  const { id } = req.params;
  res.send(id);
});

/**
 * Multiple URL params
 * GET /users/15/orders/1
 */

app.get("/users/:userId/orders/:orderId", (req, res) => {
  console.log(req.params);

  const { userId, orderId } = req.params;
  res.send({ userId, orderId });
});
