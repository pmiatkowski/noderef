const http = require('http');

// Create server object

const server = http.createServer((req, res) => {
    // Write response
    res.write('Hello World');
    res.end();
});

server.listen(5000, () => console.log('Server running...'));

