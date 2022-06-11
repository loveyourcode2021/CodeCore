// function printThis(){
//     console.log(this) //will refer to global object or undefined if in strict mode
// }
class Test{
    can(){
        console.log(this)
    }
}
function Con1(x){
    this.printGuest = function(){
        console.log(this) 
    }
}

//console.log(new Test().can())
//console.log(new Con1("haha"))

const obj = {
    printThis: function(){
        console.log(this)
        console.log("======================")
    }
}

function can(fn){
    fn()
}

let obj1 = {
    printGuest : function(fn){
        fn()
    }
}

//local-> class, proto, obj
//global-> if you call obj outside of boundary-> proto and obj are global except the class

//console.log(obj.printThis())//local
//console.log(can(obj.printThis))//global 

//console.log(can(new Test().can))//local 
//console.log(can(new Con1(1).printGuest))//global

//obj   and obj1
//obj1 will have obj fucntion and pritn this which located in obj
console.log(obj1.printGuest(obj.printThis))

//can(obj.printThis) //this refers to global object or undefined

//============Bind===================>
//used to counter behaviour of 'this' and to set reference to 'this'
//const bindPrintThis = obj.printThis.bind(obj)
//can(bindPrintThis) //this refers to obj


