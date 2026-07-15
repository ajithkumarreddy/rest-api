/**
 * Query parameters
 * req.query
 * 
 * These come after the question mark (?)
 * GET /products?category=mobile
 */

app.get("/products", (req, res) => {
  console.log(req.query);

  const { category } = req.query;
  res.send(category);
});

/**
 * Multiple Query parameters
 * GET /products?category=mobile&page=20&sort=price
 */

app.get("/products", (req, res) => {
  console.log(req.query);

  const { category, page, sort } = req.query;
  res.send({ category, page, sort });
});
