// server.js
const http = require("http");

const hostname = "127.0.0.1"; // localhost
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200; // OK
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n"); // Response
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
// This code sets up a basic HTTP server that listens on localhost:3000
// and responds with "Hello, World!" to any incoming requests.