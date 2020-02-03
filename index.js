const http = require('http');

http.createServer((req, res) => {

    req.on('end', (res) => {
        setInterval(() => res.write('Nova mensagem enviada as ' + new Date(Date.now()).toTimeString()), 1000);
    });
})
.listen('0.0.0.0', 3000, () => console.log('Server running'));
