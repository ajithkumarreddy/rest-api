// response

/**
 * A response contains:
 * HTTP Status Code
 * Headers
 * Response Body (usually JSON)
 */

// Why JSON?

/**
 * But REST APIs almost always return JSON because it is:
 * Lightweight
 * Easy to parse
 * Language independent
 * Supported everywhere
 */

app.get("/users", (req, res) => {
  const users = [ // returning array
    {
      id: 1,
      name: "rama",
    },
    {
      id: 2,
      name: "lakshman",
    },
  ];
  
  res.status(200).json({
    success: true,
    message: "users fetched successfully",
    data: users,
  });
});
