const http = require("http");
const server = http.createServer((req, res) => {
  console.log("request event");
  // res.end('Hello world')
  if (req.url === "/") {
    // // BLOCKING CODE
    // for (let i = 0; i < 1000; i++) {
    //   for (let j = 0; j < 1000; j++) {
    //     console.log(`${i} ${j}`);

    //   }
    // }
    res.end("Home Page");
  }
  if (req.url === "/about") {
    res.end("About Page");
  }
  res.end("Error Page");
});

server.listen(5000, () => {
  console.log("Server listening on port 5000.....");
});
