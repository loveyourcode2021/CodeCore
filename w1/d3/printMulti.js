const myArray = [[2,3,4], ["Hello CodeCore", 1, true]];

function printMulti(input){
    for(var x of input)
        if(typeof(x) === "object")
            for(var y of x)
                console.log(y)

}

printMulti(myArray)