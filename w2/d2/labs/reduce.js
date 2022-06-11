const plus = (a,b ) => a+b;
const number = [1,2,3,4,5];
const reduce = (number, plus, reducedNumber) => {
    number.map((ele, index) => { reducedNumber= plus(reducedNumber, ele)})
    return reducedNumber
};
console.log(reduce(number, plus,0))