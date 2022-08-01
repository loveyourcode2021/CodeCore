const readline = require('readline');
const rl = readline.createInterface(process.stdin);

var count = 0;
var isWorking = true
const generatedNum =  Math.floor(Math.random() * 10 + 1)
   console.log("guess your number")
   rl.on('line', (line) => {
      num = parseInt(line)
      if(num === generatedNum) {
         console.log("You got it", `${count}`)
      }else{
         console.log("did not worked")
         count=count+1
      }
      console.log("guess your number")
});