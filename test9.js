const http = require('http');

const server1 = http.createServer((req, res) => {
    console.log('request event');
    res.end('Hello World');

});

const server2 = http.createServer((req, res) => {
    console.log('request event');
    res.end('<h1>Hello gwagshd</h1>');

});

server1.listen(5000, () => {
    console.log('Server listening on port 5000');
});

server2.listen(5001, () => {
    console.log('Server listening on port 5001');
});