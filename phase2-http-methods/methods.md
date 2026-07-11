1. GET
- Used to retrieve data
- It should never modify data

GET /users
GET /users/1

2. POST
- Used to create new data
- Every POST usually creates a new resource

POST /users

3. PUT
- Used to replace entire resource
- PUT expects the complete object

PUT /users/1

4. PATCH
- PATCH updates only changed fields
- Missing fields stay unchanged

PATCH /users/1

5. DELETE
- Delets a resource