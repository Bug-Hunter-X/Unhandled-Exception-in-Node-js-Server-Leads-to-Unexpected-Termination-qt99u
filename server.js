const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  console.log('Request received');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon bug: Unexpected server termination due to unhandled exceptions
//In the server.on('error') event handler, ensure proper error handling to prevent unexpected termination

//This will fix the bug.  Properly handle errors within the server event listener.

//Potential fix:
server.on('error', (err) => {
  console.error('Server error:', err);
  // Additional error handling logic here
});