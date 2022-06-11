var fizz = parseInt(process.argv[2])
var buzz = parseInt(process.argv[3])

function print(i){
    console.log(i)
} 

for(var i = 1; i < 21; i ++)
{
    if(i % fizz == 0) print("fizz")
    else if(i % buzz == 0) print("buzz")
    else print(i)
}
