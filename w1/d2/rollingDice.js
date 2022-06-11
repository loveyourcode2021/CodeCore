let x = 0;
let result = 0;
let size = parseInt(process.argv[2])
for(var i = 0 ; i < size; i++)
{

   x = parseInt(Math.random()*process.argv[3])
   console.log(x)
   result += x
}
console.log(result/size)
console.log(result)