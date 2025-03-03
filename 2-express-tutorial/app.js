import express from "express";

const app = express();

// Methods in express
// app.get = read data
// app.post = create data
// app.put = update data
// app.delete = delete data
// app.all = all methods
// app.use = middleware
// app.listen = start server

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

app.listen(4000, () => {
  console.log("Server is listening on http://localhost:4000");
});
