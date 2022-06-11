function merge(a1, a2){
   Object.assign(a1,a2)
    console.log(a1)
}

merge({a: 1, b: 2}, {c: 3, d: 4})