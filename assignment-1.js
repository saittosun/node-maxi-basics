const http = require('http');
const { createServer } = require('http');

const server = http.createServer((req, res) => {
 const url = req.url;
 if (url === '/') {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Assignment 1</title></head>');
  res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>')
  res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>')
  res.write('</html>');
 }
})