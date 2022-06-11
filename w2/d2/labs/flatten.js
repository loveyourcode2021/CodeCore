
const flatten = (numbers) => {
    var result = []
    numbers.forEach(element => {
        console.log("before",element)
        if(Array.isArray(element)){
            console.log(element)
            result = result.concat(flatten(element))
        }else{
            result.push(element)
            console.log("result",result)
        }
        console.log("after",result)
    })
    return result;
}

console.log(flatten([ 1, 2, [3, [4, 5] ] ])); // returns [ 1, 2, 3, 4, 5 ]
console.log(flatten([ 'a', [ 'b', ['c'] ] ])); // returns [ 'a', 'b', 'c' ]
console.log(flatten([ [ 2, 3 ], [8, [5, 9], [4, 5]], 10])); // returns [ 2, 3, 8, 5, 9, 4, 5, 10 ]