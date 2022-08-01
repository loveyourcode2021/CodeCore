const fs = require("fs");
const { parse } = require("csv-parse");
let output = [];

fs.readFile("./marked.csv", "utf8", (err, data) => {
  data.split("\n").map((element) => {
    const row = element.split(",");
    const user = {
      fullname: row[0],
      email: row[1],
      marked: row[2],
    };
    output.push(user);

  });
  fs.writeFile("deleted.csv", extractCSV(users), err => {
    if(err){
      console.log(`something is wrong`,err)
    }else{
      console.log(`saved as deleted.csv`)
    }
  })

});


function extractCSV(user) {
  const rows = user.map((user) => {
      if (user.marked === "no" ) {
        return `${user.fullname}, ${user.email}, ${user.marked}`;
      }
  }).filter(function(x) {
    return x !== undefined;
}).join("\n");
  return  rows.toString();
}


