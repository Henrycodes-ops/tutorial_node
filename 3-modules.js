// Modules
// Modules are reusable pieces of code that can be exported from one program and imported for use in another program.
const names = require('./names') 
const sayHi = require('./5-utils') 
console.log(names);





sayHi(names.john);
sayHi(names.peter);