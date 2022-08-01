const fs = require('fs');
const [,,fileName, outputPath] = process.argv
const vowels = ["a","e","i","o","u"];
fs.readFile(fileName, "utf-8",function(err, data) {
    if(!err){
        let results = data.split(/\r\n|\r|\n|\s+/).map((element, index) => {
            const firstChar = vowels.indexOf(element.charAt(0))
            const num = Math.floor(Math.random()*2 + 1)
            if(firstChar > -1){
                let result = num === 1 ? element+"ay": element+"way "
              
                return result
            }else{
                let result = element.slice(1)+element.charAt(0)+"ay "
               
                return result
            }
        });
        console.log(results.join(''))
        
        fs.writeFile(outputPath, results.join(''), (err, data) => {
            if(!err) console.log(data)
        })
        
    } 
   
})