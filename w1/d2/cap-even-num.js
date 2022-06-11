const maxSize = process.argv[2].length
var result = "";
let value = process.argv[2];

let value1 = process.argv[2].toString().split("");
for(var i = 0;  i < maxSize; i++)
{
    if(i%2 == 0){
        result+=(value[i].toUpperCase())
    } else{
        result+=(value[i])
    }
}
console.log(result)
console.log(`${result}`)
