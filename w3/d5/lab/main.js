const { writeFile, readdir } = require('fs');
const {readFile, writeFile, readir, add, div, mult, pow} = require('./readFile.js')
//readFile("main.js").then((data)=>console.log(data));
 const test1 = add(9).then(value => add(9, value))// value is 9
  .then(value => add(2, value))// value is 18
  .then(value => mult(5, value)) // value is 20
  .then(value => div(value, 10)) // r is 100
  .then(console.log); // logs 10

  const test2 =pow(2).then(r => pow(2, r)) // r is 2
.then(r => pow(2, r)) // r is 4
.then(r => mult("fitty-two", r)) // r is 16, but the mult('fitty-two', ...)
.then(console.log)
.catch(console.log);

