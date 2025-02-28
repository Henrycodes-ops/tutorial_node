import { error } from "console";
import { createReadStream } from "fs";

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (error) => {
  console.log(error);
}); 
