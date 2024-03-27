const http = require("http");
const PORT = 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("About Page");
  } else {
    res.end("Error Page");
  }
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server Running On Port: ${PORT}`);
});
