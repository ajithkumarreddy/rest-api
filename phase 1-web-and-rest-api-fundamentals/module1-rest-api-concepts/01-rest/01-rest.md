# REST (Representational State Transfer)

REST is an architectural style for designing web APIs that lets clients and servers communicate over HTTP.

Main ideas of REST:
1. Resources are identified by URIs (Unique Resource Identifiers).
2. Operations are performed using HTTP methods such as GET, POST, PUT, PATCH, and DELETE.
3. Communication is stateless, meaning each request contains all the information needed to understand it.
4. Data is exchanged through representations, usually JSON or XML.

Example:
```http
GET /users/123
```

This request asks for the resource with ID 123.

## Why REST is popular

- Simple and scalable
- Built on standard HTTP rules
- Easy for different systems to communicate
- Widely used in modern web APIs
