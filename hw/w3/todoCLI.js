
var fs = require("fs");
const { resolve } = require("path");
var util = require('util')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "> "
});

const question = (str) => new Promise(resolve => readline.question(str, resolve));
const writeFile = util.promisify(fs.writeFile);
const fileExist = util.promisify(fs.exists)
class Info{
  constructor(){
    this.main_instruction= "Welcome to Todo CLI! \n"+ "--------------------\n"+"(v) View • ( n ) New • (cX) Complete • (dX) Delete • (s) Save • (q) Quit\n> ",
    this.todoList= []
    this.count=0
    this.myJsonString = [];
    this.filename = 'myTodos.json'
    return this;
  }

  covnertArrayToJson(){
    return new Promise( resolve => {
    this.todoList.map( (element, index) => {
      var jsonArg = new Object();
      element = element.split(" ")
      jsonArg["completed"] = element[1] === "[]"? false: true;
      jsonArg["title"]  = element[2];
      this.myJsonString.push(jsonArg)
      
     })
     resolve(this);
    })
  }
    
}
const todoCLI = {
  info: new Info(),

  start: async () => {
    return todoCLI.seeDecisions();
  },
  seeDecisions: async () => {
    const userInput = await question(todoCLI.info.main_instruction);
    todoCLI.makeDecision(userInput)
  },
  readData: async () => {

    //let result = false; 
    //let exists = await Task.Run(() => File.Exists(fileName));
    //console.log(exists)
    if(fs.existsSync("myTodos.json")){
      const data = await fs.promises.readFile("myTodos.json", "binary");
   
      let result = JSON.parse(Buffer.from(data))
      //todoCLI.info.todoList.map( element => console.log(element))
      console.log(result)
      return await todoCLI.seeDecisions();
    }else{
      console.log(todoCLI.info.todoList)
      await Promise.all(todoCLI.info.todoList.map( element => console.log(element)))
      return await todoCLI.seeDecisions();
    }

   
  },
  saveData: async () => {
    console.log(`List saved to \"myTodos.json\"`)
    await writeFile('myTodos.json', JSON.stringify(todoCLI.info.myJsonString));
  },
  makeDecision: async(input) => {
    let todoListArray = todoCLI.info.todoList
    let todoListData = todoCLI.info
      const choice = input.charAt(0).trim();
      const option  = input.charAt(1) ?  Number(input.charAt(1)) : -11;
  
          if(choice === 'v'){
            todoCLI.readData();
            
          }
          else if(choice === 'n'){
            const getNewInfo = await question("what?\n>");
            todoListArray.push(todoCLI.info.count+ ' [] '+getNewInfo);
            todoListData.count++
            return await todoCLI.seeDecisions();
          }
          else if(choice.charAt(0) === 'c' && option !== -11) {
            const position = todoListArray[option].indexOf('[');
            if(todoListArray[option].charAt(position) === "[" && todoListArray[option].charAt(position+1)  === "]"){
              const list = todoListArray[option].split(" ");
              list[1] = " [✓] ";
              todoListArray[option] = list[0] + list[1] + list[2];
            }
            return await todoCLI.seeDecisions();
          }
          else if(choice === 'd' && option !== -11){
            todoListData.count = todoListData.count-1
            delete todoListArray[option];
            return await todoCLI.seeDecisions();
           
          }
          else if(choice === 's'){
            todoCLI.info.covnertArrayToJson();
            todoCLI.saveData();
            return await todoCLI.seeDecisions()
          }
          else if(choice === 'q'){
              return todoCLI.end()
          }
 
  },
  end: async () => {
    console.log("See you soon! 😄");
    readline.close();
    process.exit(0);
  },
};

todoCLI.start();
