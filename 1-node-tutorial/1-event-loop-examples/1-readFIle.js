const { readFile } = require("fs");

console.log("start a first task");

// Check File Path!!!

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(result);

  console.log("completed first task");
});

console.log("starting next task");
