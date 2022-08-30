const http = require('http');
const PORT = 3000
const fs = require('fs');

const server = http.createServer((req,res) => {

  switch (req.url) {
    case ('/'):
      fs.readFile('./index.html', (error, data) => {
        res.statusCode = 200
        res.setHeader('Content-Type','text/html')
        res.end(data)
      });
      break;

    case ('/app'):
      fs.readFile('./app.html', (error, data) => {
        res.statusCode = 200
        res.setHeader('Content-Type','text/html')
        res.end(data)
      });
      break

    default:
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('Page not found!');

  }


});

server.listen(PORT,() => {
  console.log('Server is running...')
})
