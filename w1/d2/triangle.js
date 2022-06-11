var a = parseFloat(process.argv[2])
var b = parseFloat(process.argv[3])
var c = parseFloat(process.argv[4])
var s = (a + b + c) / 2
var product = s * (s - a )* (s - b )* (s - c )
if(s < a || s < b || s < c )
{
    console.log("Invalid Value")
    
}
var area = Math.sqrt(product).toFixed(4)
console.log(area)
console.log(`${s*2}`)