/**
 * Headers
 * req.headers
 *
 * Headers contain metadata.
 * Authorization
 * Content-Type
 * Accept
 * User-Agent
 * Cookie
 * Host
 * Origin
 * Referer
 * Cache-Control
 */

app.get("/dashboard", (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send("No Token");
  }

  res.send("Authorized");
});
