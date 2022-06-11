function alphaRange(a,b){
    let chars = []
    for(let i = a.charCodeAt(0) ; i <= b.charCodeAt(0) ; i++)
            chars.push(String.fromCharCode(i))
    return chars;
}

console.log(alphaRange("B","Z"))