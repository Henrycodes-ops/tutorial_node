import express from "express";
import path from 'path'


const app = express();

// Methods in express
// app.get = read data
// app.post = create data
// app.put = update data
// app.delete = delete data
// app.all = all methods
// app.use = middleware
// app.listen = start server

app.use(express.static('./navbar-app'))

app.get("/", (req, res) => {
  res.sendFile(path.resolve('./navbar-app/index.html'));
});



app.all("*", (req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(4000, () => {
  console.log("Server is listening on http://localhost:4000");
});
