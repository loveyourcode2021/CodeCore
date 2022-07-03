const fs = require('fs')
fs.readFile('demo.txt','utf8', function(err, data){
    if(!err){
        data
    }
})  

fs.writeFile