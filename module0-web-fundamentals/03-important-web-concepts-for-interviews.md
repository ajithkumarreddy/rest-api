# Important web concepts for interviews

These topics are very useful for frontend, backend, and full-stack interviews.

## 1. DNS
- DNS translates a human-readable domain name into an IP address.
- Example: example.com -> 93.184.216.34

## 2. HTTP vs HTTPS
- HTTP is plain text and not encrypted.
- HTTPS uses TLS/SSL for secure communication.

## 3. Cookies, Sessions, and Tokens
- Cookies store small data on the browser.
- Sessions are stored on the server and linked to a client.
- JWTs are commonly used for stateless authentication.

## 4. Caching
- Browser caching reduces repeated requests.
- CDN caching improves performance globally.
- Server-side caching improves response time.

## 5. Load balancer and reverse proxy
- A load balancer distributes traffic across multiple servers.
- A reverse proxy hides backend servers and improves security and performance.

## 6. Same-origin policy and CORS
- Browsers block requests between different origins by default.
- CORS allows safe cross-origin requests when configured properly.

## 7. Authentication vs Authorization
- Authentication: who you are.
- Authorization: what you are allowed to access.

## 8. Statelessness
- REST APIs are usually stateless, meaning each request contains all needed information.
- This makes scaling easier.

## 9. SSR vs CSR
- SSR renders content on the server before sending it to the browser.
- CSR loads a minimal page and renders content in the browser using JavaScript.
