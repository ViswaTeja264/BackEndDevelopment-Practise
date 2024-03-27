const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // const text = fs.readFileSync('./Content/BigFile.txt', 'utf8');
    // res.end(text);

    console.log("Server is Running");

    const fileStream = fs.createReadStream('./Content/BigFile.txt', 'utf8');
    fileStream.on('open', () => {
        fileStream.pipe(res);
    });
    fileStream.on('error', (error) => {
        res.end(error);
    })
});

server.listen(5000, () => {
    console.log('Server Is Running On Port: 5000');
})