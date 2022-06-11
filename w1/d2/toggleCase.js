let x = process.argv[2]
let result = ""
for(var i = 0 ; i < x.length; i++)
{
    if(x[i] == x[i].toLowerCase()) result += x[i].toUpperCase()
    else if(x[i] == x[i].toUpperCase()) result += x[i].toLowerCase() 
}

console.log(result)