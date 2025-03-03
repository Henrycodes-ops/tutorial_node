console.log("Express tutorial");
import http from "http";
import { readFileSync } from "fs";

// get all files
const homePage = readFileSync('./index.html')

const server = http.createServer((req, res) => {
  // res.writeHead(200, {'content-type': 'text/html'})
  // res.end('<h1>Home page</h1>')
  // better one is
  const url = req.url 

  if (url === '/') {
    res.writeHead(200, { "content-type": "text/html" });
  res.write('homePage');
  res.end();
  }
  // about
  else if (url === '/about') {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>About page</h1>", "utf8");
      res.end();
  }

  // 404
  else {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("<h1>page not found</h1>", "utf8");
      res.end();
  }

  
});

server.listen(5000);
