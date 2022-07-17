const net = require('net'); // net is a module built into NodeJS that is used for creating TCP server

const resersedWords = (input) => {
    let dataToString = input.string()
    let max = dataToString.length;
    let result = ""
   
    for(let i = max-1 ; i >= 0; i--)
    {
      result +=  dataToString.charAt(i)
    }
    return result;
}

const largestNumber = (number) => {
  let x = number.toString().split(',').map(function(item) {
    return parseInt(item, 10);
  });
 
  let maxNum = x[0];
  for(let i  =1 ; i < x.length; i++){
    if(maxNum < x[i]){
      maxNum = x[i];
    }
  }
  return maxNum;
}

const guessNumber = () => Math.floor(Math.random() * 10)+1
const server = net.createServer(function (socket) {
  // this callback function is an event listener
  // an even listener is a function that will trigger specified event
  // "socket" is representing a connection
let count = 1; 
let number = guessNumber();
socket.on("data", function (data) {
    // data event listener, whenever the server receives "data" it will trigger this event
    // the data argument represents the data coming from a client's request
    if(number !=  data.toString()){
      if(number< data.toString()){
        socket.write("Guess lower")
      }else{
        socket.write("Guess higher")
      }

      socket.write(`You guessed right in ${count} attempt(s)`)
      count+=1;
    }else{
      socket.write(`You got it ${number}`)
      count = 0;
    }
      
    //let result = resersedWords(data)
    //let result = largestNumber(data);
    //socket.write(`${result}`)
  })  
})

server.listen(5000, "127.0.0.200", () => {
  console.log(`Server is listening on 127.0.0.1:5000`);
})