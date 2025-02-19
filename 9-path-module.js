const path = require("path");

console.log(path.sep);

const filePath = path.join("./content", "subfolder", "test.txt");

console.log(filePath);

// returns the last file oath
const base = path.basename(filePath);

console.log(base);

// The path.resolve method is used to check the absolute file path of a folder
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");

console.log(absolute);
