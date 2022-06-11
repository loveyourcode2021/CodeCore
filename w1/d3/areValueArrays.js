function areValuesArrays(input){
    for(var el of input) if(typeof(el) !== 'object') return false;
    return true;
}

function x(input)
{
    for(var x of input) console.log(typeof(x))
}
x([[1], 2, [6, 7, 8]])
console.log(areValuesArrays([[1], [2], [4, 5]])); // returns true

console.log(areValuesArrays([1, [2], [6, 7, 8]])); // returns false

console.log(areValuesArrays([[1], 2, [6, 7, 8]])); // returns false

console.log(areValuesArrays(['true', 'false']));