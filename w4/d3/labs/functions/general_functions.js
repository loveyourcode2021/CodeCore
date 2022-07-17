function getResult(year) {
    var age = "";

    switch (true) {
        case (year > 2022):
          age = "from the future";
          break;
        case (year >= 2016):
          age = "New";
          break;
        case (year >= 2006):
          age = "Old";
          break;
        case (year < 2006):
          age = "Very Old";
          break;
      }
    
    return age||0;
}

function getWinner(name){
  return name ? "Winner is " + name.charAt(0).toUpperCase()+ name.slice(1) : undefined ;
}

function getCurrentList(cur_dir = undefined){
  const fs = require('fs');
  if(cur_dir)
  { return new Promise((resolve, reject) =>{
    fs.readdir(cur_dir, (err, data) => {
      if(err) throw err
      resolve(data)
    })
  })

  }
}

function performCalculation(num1,num2, symbol){
  num1 = parseFloat(num1)
  num2 = parseFloat(num2)
  console.log(num1, num2, symbol)
  var result = 0
  switch(true){
    case symbol === "*":
      result =  num1 * num2
      break;
    case symbol === "+":
      console.log("helo")
      result =  num1 + num2
      console.log("helo", result)
      break;
    case symbol === "-":
      result =  num1 - num2
      break;
    case symbol === "/":
      result =  num1 / num2
      break;
  }
  console.log(result)
  return result.toFixed(2)
}
module.exports = {
    getResult:getResult,
    getWinner:getWinner,
    getCurrentList:getCurrentList,
    performCalculation:performCalculation
}