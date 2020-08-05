// jshint esversion: 9
const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {// three equal sign anlami ikiside value ve string 
    res.write('<html>');
    res.write('<head><title>enter message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  // yukaridaki kodu calistirdiktan sonra url '/message' olacagindan oturu asagidaki kod calisacak!!!
  console.log(req.url, req.method, req.headers);
  // process.exit();
  res.setHeader('Content-type', 'text/html');
  res.write('<html>');
  res.write('<head><title>my first page</title></head>');
  res.write('<body><h1>hello!!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);


