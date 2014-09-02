var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Node.js\n');
}).listen(8080);
console.log('Server running');
<<<<<<< HEAD
// this is master branch for pull request
=======
// try pull request
>>>>>>> ee194325152adc05a7f19d5e68c13ab40ccc9afa
