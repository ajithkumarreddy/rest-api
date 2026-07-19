# HTTP Methods

1. GET
- Used to retrieve data.
- It should not modify data.

Example:
GET /users
GET /users/1

2. POST
- Used to create new data.
- A POST request usually creates a new resource.

Example:
POST /users

3. PUT
- Used to replace an entire resource.
- The client should send the full updated object.

Example:
PUT /users/1

4. PATCH
- Used to update only part of a resource.
- Missing fields usually remain unchanged.

Example:
PATCH /users/1

5. DELETE
- Used to remove a resource.

Example:
DELETE /users/1

6. HEAD
- Similar to GET, but it returns only the headers and no response body.

Example:
HEAD /users

7. OPTIONS
- Used to ask which HTTP methods are allowed for a specific URL.

Example:
OPTIONS /users
