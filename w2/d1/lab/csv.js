let csvData = `
id,firstName,lastName,email

1,jane,doe,wildmirror@yahoo.com

2,john,doe,tamepool@hotmail.com

3,sherlock,holmes,mag@glass.com

4,natalia,romanov,8legged@ninja.com

5,peter,quill,starlord@gmail.com`


function parseCSV(data)
{
    const newData = data.split("/r/n")
   
    return newData
}
let user = parseCSV(csvData)
//let users = parseCSV(csvData)

console.log(user[0])