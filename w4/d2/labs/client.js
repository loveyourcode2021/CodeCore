const net = require('net');
const client = new net.Socket()


const readline = require('readline');
const terminmal = readline.createInterface({
  input:process.stdin,
  output:process.stdout
})

client.on("data", function (data) {
  console.log(  data+"");

})
terminmal.on('line', function(input){

client.connect(5000, "127.0.0.200", function () {

  client.write(input)
  client.end()
})
})