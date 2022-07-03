const fs = require('fs');

function readFile(path){
    return new Promise((res, rej) => {
        fs.read(path, "utf-8", (err,data) => {
            if(err)rej(err)
            res(data);    
        });
    });      
    

function writeFile(fileName, fileContent){
    return new Promise((res, rej) => {
        fs.writeFile(fileName, fileContent, (err) => {
            if(err) rej('Something went wrong.')
        })
        res();
    })
}

function readir(path){
    return new Promise((res, rej) =>{
        fs.readdir(path, (err, dir) => {
            if(err) rej(err)
            rej(dir)
        }
    )}
}



function add(a, b = 0) {
    return promiseMath(a, b, a + b);
}
function mult(current, value = 1){
  return promiseMath(current, value, current * value);
}

function div(current, value = 1){
    return promiseMath(current, value, current / value);
  
}

function pow(current, value = 1){
    return promiseMath(current, value, current ** value);
}




function promiseMath(leftVal,rightval, value){
    return new Promise( (resolve, reject) => {
        if(leftVal === undefined || isNaN(value)){
            reject("there is no value")
        }
        resolve(value)
    })
}



module.exports = {
    readFile:readFile,
    writeFile:writeFile,
    readir:readir, 
    add:add,
    div:div,
    mult:mult,
    pow:pow
}