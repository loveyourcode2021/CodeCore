function reverser(input, type = "")
{
    let reverse = []
    let result = ""
    for(var i  = input.length-1, j= 0 ; i >= 0 ; i--)
    {
        //reverse[j]=input[i];
        result += reverse[j];
        j++;
    }
    //if(type  === "str") return result
    return result
}
console.log(reverser("hello"))