let arr = [1,2,3,4,5,6];
// given three functions:
// even returns true if its argument, n, is an even number (false otherwise)
const even = function ( n ) { return n % 2 === 0 };
// even returns true if its argument, n, is an odd number (false otherwise)
const odd = function ( n ) { return !even( n ) };

// creates a function that returns true if its argument is above min
const above = function (min) {
  return function ( n ) {
    return n > min;
  }
}

// repeatedValue returns true if its argument, value, is a value that is repeated within the array, arr, (falcodee

const repeatedValue = function(value, index, arr) {
  return index !== arr.indexOf(value);
};

let filter = (x,y) => {
    console.log(y.name)
    let result = []
    if(y.name == "repeatedValue"){
        x.map((ele, index) => {      
            if(y(ele,index,x)) result.push(ele)
        })
    }else{
        x.map((ele, index ) => { if(y(ele)) result.push(ele) })
    }
    console.log(result);
}

filter(arr, even) // returns 2,4,6
filter(arr, odd) // returns 1,3,5
filter(arr, above(3)) // returns 4,5,6
filter([1, 2, 3, 2, 3, 4, 5], repeatedValue); // returns 2,3