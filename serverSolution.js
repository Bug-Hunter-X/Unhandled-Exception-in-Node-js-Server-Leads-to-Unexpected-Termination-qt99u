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

//Improved error handling:
server.on('error', (err) => {
  console.error('Server error:', err);
  //Additional error handling logic here, e.g., retrying the operation, alerting an administrator
});