# What happens when a URL is hit in the browser?

When you type a URL and press Enter, the browser performs several steps before the page appears.

## Flow

1. URL parsing
   - The browser reads the protocol, domain, path, query string, and fragment.
   - Example: https://example.com/products?sort=price

2. DNS lookup
   - The browser finds the IP address of the domain.
   - It may use browser cache, OS cache, or DNS server cache.

3. Connection setup
   - For HTTP, the browser opens a TCP connection.
   - For HTTPS, it also performs a TLS handshake before sending the request.

4. HTTP request
   - The browser sends an HTTP request to the server.
   - The request includes method, headers, URL, and sometimes a body.

5. Server processing
   - The server receives the request, runs application logic, and prepares a response.
   - It may read a database, check authentication, or generate HTML.

6. Response sent back
   - The server returns an HTTP response with a status code, headers, and body.

7. Browser rendering
   - The browser parses HTML, CSS, and JavaScript.
   - It builds the DOM, applies styles, executes scripts, and paints the page.

## Important interview points

- DNS resolves a domain name to an IP address.
- HTTPS adds encryption using TLS.
- TCP ensures reliable data transfer.
- The browser may also make additional requests for CSS, JavaScript, images, and API calls.
- A single page load can involve many round trips between the browser and server.
