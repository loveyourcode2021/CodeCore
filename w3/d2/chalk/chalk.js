const chalk = require('chalk');
const [,,color,row,col] = process.argv
let chalkColor =  chalk.bgKeyword(color)(" ") 
let result = ""
for(let i = 0, j = row ; i < col; i++){
   result += ((i+1)%col)%2 == 0 ? (" "+chalkColor).repeat(j/2) : (chalkColor+" ").repeat(j/2) 
   result += "\n"
}
console.log(result)
for(let i  = 0 ; i < row ;i++){
    if(i %2 == 0){
        for(let j = 0 ; j < col ; j++){
            if(j %2 == 0 ){
                result+=chalk.red(" ")
            }else{
                result+=" "
            }
        }
        result+="\n"
    }else{
        for(let j = 0 ; j < col ; j++){
            if(j %2 == 0 ){
                result+=" "
            }else{
                
                result+=chalk.red(" ")
            }
        }
        result+="\n"
    }
   
}

console.log(result)

/*
const chalk = require("chalk");
// Skip first 2 elements from `process.argv` and assign remaining 3 elements
// to variables: colour, width and height.
const [, , colour, width, height] = process.argv;

const board = Array.from({ length: width * height })
  // Alternate the background color of even numbered
  // characters
  .map(
    (v, i) =>
      (i + 1 + Math.floor(i / width)) % 2 === 0
        ? chalk.bgKeyword(colour)(" ")
        : " "
  )
  // Join all characters into one string with a "\n" character
  // every `width` characters.
  .reduce((acc, v, i) => ((i + 1) % width === 0 ? acc + v + "\n" : acc + v));

console.log(board);
*/
/*
const chalk = require('chalk');
const newColor = process.argv[2];
const width = parseInt(process.argv[3]);
const height = parseInt(process.argv[4]);

let line = '\u2588 '.repeat(Math.floor(width/2));
let result = '';
for (let i = 1; i <= height; i++) {
    if (i%2 == 0) {
        result = result + line +'\n'
    } else {
        result = result + ' ' + line + '\n'
    }
}
*/