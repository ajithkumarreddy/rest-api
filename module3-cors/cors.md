# CORS Basics

Browsers enforce a security rule called the Same-Origin Policy (SOP). This policy prevents a webpage from one origin from reading data from another origin unless that second origin explicitly allows it.

An origin is made of:
- Protocol
- Subdomain
- Domain
- Port

Example:
- https + app + example.com + 443

Cross-Origin Resource Sharing (CORS) is a mechanism that allows a server to relax this rule for trusted websites.

Common CORS concepts:
- Allowed origins
- Allowed methods
- Allowed headers
- Credentials
- Preflight requests
  