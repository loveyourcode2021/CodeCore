function fib(num)
{
    let n1 = 0, n2 = 1, nextTerm;
    for(var i = 0; i < num; i ++)
    {
        console.log(n1)
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}

function stairSentence(information)
{
    var splitedInfo = information
  
    for(var i = 0, j = 0 ; i < splitedInfo.length ; i++)
    {
        if(splitedInfo[i].includes('.'))
        {
            
            console.log(" ".repeat(j)+splitedInfo[i])
            j=0

        }else{
            console.log(" ".repeat(j)+splitedInfo[i])
            j++
        }
    }
}
//fib(20)
const g = "hi hi1 hi2 hi3. hi4 hi5 hi6".split(" ")
console.log(g[3].includes('.'))
stairSentence(g)
