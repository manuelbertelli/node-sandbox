const http = require('http');

http.createServer((request, response) => {
    const { method, url } = request;
    console.log('Received', method, 'on', url);
  request.on('error', (err) => {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', (err) => {
    console.error(err);
  });
  if (request.method === 'POST' && request.url === '/echo') {
    request.pipe(response);
  } else {
    setInterval(() => response.write('Agora são: ' + new Date(Date.now()).toLocaleTimeString()), 1000);
  }
}).listen(8080);