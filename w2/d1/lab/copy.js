

function clone(a){
    return JSON.parse(JSON.stringify(a))
}
let objA = {a: 1, b: 2}
let objB = clone(objA)
console.log(objB, objA)
console.log(objA == objB)