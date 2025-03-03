import http from "http";
import { readFileSync } from "fs";

console.log("Express tutorial");

let homePage;
try {
  homePage = readFileSync("./navbar-app/index.html");
} catch (err) {
  console.error("Error reading index.html:", err);
  homePage = "<h1>Error loading page</h1>";
}

// createServer method creates a server object

const server = http.createServer((req, res) => {
  // res.writeHead(200, {'content-type': 'text/html'})
  // res.end('<h1>Home page</h1>')
  // better one is
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  // about
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About page</h1>");
    res.end();
  }

  // 404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
  }
});

// The server is listening on port 5000
// because it is a commonly used port for development purposes.
server.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
