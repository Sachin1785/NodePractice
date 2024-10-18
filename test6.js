const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    if(req.url === '/'){
        res.end('home page');
    }
    if(req.url === '/about'){
        res.end(`
            <h1 style=" color: red ">about page</h1>
            <p> lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <a href="/">back home</a>
            `
        );
    }
    // res.write('Welcome to our home page');
    res.end();

});

server.listen(5000);