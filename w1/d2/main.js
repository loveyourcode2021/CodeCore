console.log("helloworld")
var max = 0
for(var i = 2; i<process.argv.length;i++)
{
    if(max < i) max = i ;
}
console.log(max)