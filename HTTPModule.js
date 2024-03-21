const http = require('http');

const server  = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome To NodeJs And Express Practise');
    }
    else if(req.url === '/about') {
        res.end('This is my about page');
    }
    else {
        res.end(`
    <h1>Oops!</h1>
    <p>We can't see a page that you are looking for</p>
    <a href='/'>Back Home</a>
    `)
    }
    res.end();  
});

server.listen(5000);