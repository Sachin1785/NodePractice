const http = require('http');

const server1 = http.createServer((req, res) => {
    // console.log('request event');
    if (req.url === '/') {
        res.end('<h1>Welcome to our home page</h1>');
    } 
    else if (req.url === '/about') {
        res.end('<h1>Here is our short history</h1>');
    } 
    else {
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">Back home</a>
        `);
    }
});

server1.listen(5000, () => {
    console.log('Server listening on port 5000');
});