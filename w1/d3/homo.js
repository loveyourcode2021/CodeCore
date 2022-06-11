function isHomogenous(input){
    var checkType = false;
    for(var i = 0; i < input.length ; i++)
    {
       let result =  (Array.isArray(input[i]))
       const element = typeof(input[i])
       for(var j = 0;  j < input.length; j++) 
            if(typeof(input[i]) != typeof(input[j]) ) 
                return false;
            else if(result)
                if((Array.isArray(input[i]) && Array.isArray(input[j])) == false)
                        return false;
       
    }
    return true;
}

console.log(isHomogenous([1, 2, 3])) // true

console.log(isHomogenous(['a', 'b', 'c'])) // true

console.log(isHomogenous([[2], 'Xavier'])) // false

console.log(isHomogenous([[2], {colour: 'blue'}])) // false

console.log(isHomogenous([1, '2', 3])) // false