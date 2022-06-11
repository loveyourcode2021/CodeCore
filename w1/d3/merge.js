function duplicate(merge)
{
    for(let i = 0; i < merge.length ; i++)
    {
        if(merge[i] === merge[i+1]) merge.splice(i,i+1,merge[i+1]);
    }
    return merge
}

function findDuplicated(merge)
{
    let result = []
    for(let i = 0; i < merge.length ; i++)
    {
        if(merge[i] === merge[i+1])
        {
            result.push(merge[i]);
            i++;
        } 
    }
    return result
}
function merge(input1, input2)
{
    return input1.concat(input2).sort();
}
console.log(duplicate(merge([1,2,7,4],[4,5,6])));
console.log(findDuplicated(merge([1, 2, 3, 4], [3, 4, 5, 6, 7])))
console.log(findDuplicated(merge(['j', 'a', 'n', 'e'], ['j', 'o', 'h', 'n', 'n', 'y'])))


function alphaRange(start, last){
    let result = []
    for(var i = start.charCodeAt(0); i <= last.charCodeAt(0); i ++)
    {
        result.push(String.fromCharCode(i))
    }
    return result
} 



console.log(alphaRange('a','f'))
console.log(alphaRange('d', 'h') )

function closetNeighbors(n,a,b,c){
    var x = false, i = 1, result1 = 0, result2 = 0;
    console.log(a*b*c)
    while(x != true)
    {
        result = a*b*c*i
        if(result1 <= n){
            result1 = result;  
        } 
        if(result2 >= n){
            x = true;
            break;
        }
        i++
    }

    console.log(result1, result2);
}
closetNeighbors(20,2,3,4)
