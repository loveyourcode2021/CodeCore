const even = n => n % 2 === 0;
const pow2 = n => n ** 2;
const numbers = [1, 2, 3, 4, 5, 6];
const name = n => (`${n}`)
const map1 = (numbers, name1) => { 
    const result = []
    
    if(typeof(numbers[0]) === "number"){
        numbers.forEach(element => {
            result.push(name1(element))
        })
        return result;
    }else{

        numbers.forEach(element => { 
           if(element !== undefined)
            console.log(name1(element))
        })
        return ""
    }
}
let z = numbers.length
const map = (numbers, callback, z ) => {
   result = []
   if(numbers.length > 0){
    let x =  numbers.shift()
    map(numbers, callback, z)
    result.unshift(callback(x))
    if(z === result.length) return (result) 
   }else{
       return;
   }
}

console.log(map(numbers, even, z)); // [false, true, false, true, false, true]

console.log(map([1, 2, 3, 4, 5, 6], n => n.toString().repeat( n ), z)) // ['1', '22', '333', '4444', '55555', '666666']

console.log(map([1, 2, 3, 4, 5, 6], pow2, z)); // [1, 4, 9, 16, 25, 36]
const names = ["Cersei", "Jon", "Arya"];
//console.log(map(names, name => `Hi, ${name}!`)); // ['Hi, Cersei!', 'Hi, Jon!', 'Hi, Arya!']
