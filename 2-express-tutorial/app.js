console.log("express tutorial");
import http from "http";

const server = http.createServer((req, res) => {
  // res.writeHead(200, {'content-type': 'text/html'})
  // res.end('<h1>Home page</h1>')
  // better one is
  console.log(req);

  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>Home page</h1>", "utf8");
  res.end();
});

server.listen(5000);
