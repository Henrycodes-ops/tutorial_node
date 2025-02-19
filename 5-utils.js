const secret = "SUPER_SECRET";
const john = "John";
const peter = "Peter";

 const sayHi = (name) => {
  console.log(`Hello there ${name}`);
}

module.exports = { sayHi, john, peter, secret };