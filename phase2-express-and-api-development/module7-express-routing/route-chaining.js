app
  .route("/users")
  .get((req, res) => {
    res.send("Get Users");
  })
  .post((req, res) => {
    res.send("Create User");
  })
  .put((req, res) => {
    res.send("Update User");
  })
  .delete((req, res) => {
    res.send("Delete User");
  });
