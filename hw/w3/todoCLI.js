const { rejects } = require('assert');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "> "
});


let count = 0; 
const main_instruction = "Welcome to Todo CLI! \n"+ "--------------------\n"+"(v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit\n> "
let toDoList = ["0 [✓] Take out the trash",
"1 [✓] Buy toothpaste",
"2 [ ] Buy Snickerdoodles",
"3 [ ] Fix the climate",
"4 [ ] Find a cure for aging"]
/*
function ask(instruction) {
    return new Promise(resolve => {
      readline.question(`${instruction}`, (userInput) => {
        if(userInput.lenght<=0) rejects("there is no input")

        resolve(userInput)
    });
    });
}

ask(main_instruction).then(result => {
    makdeDecision(result)
    return ask(instruciton);
}*/





const question = (str) => new Promise(resolve => readline.question(str, resolve));
class Info{
  constructor(){
    this.main_instruction= "Welcome to Todo CLI! \n"+ "--------------------\n"+"(v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit\n> ",
    todoList= []
    count=0
  }
}
const steps = {
  info: new Info(),
  start: async () => {
    return steps.seeDecisions();
  },
  seeDecisions: async () => {
    const userInput = await question(steps.main_instruction);
    steps.makeDecision(userInput)
    return steps.start();
  },
  showCars: async () => {
    console.log('showing cars');
    return steps.end();
  },

  makeDecision: async(input) => {
      const secondWord  = input.charAt(1).length > 1 ? choice.charAt(1).toUpperCase() : "";
      const choice = input.charAt(0)+(`${secondWord}`).trim();
          if(choice === 'v'){
            steps.todoList.map((ele) => {console.log(ele)})
            return steps.start();
          }
          else if(choice === 'n'){
            const getNewInfo = await question("what?\n>");
            steps.todoList.push(count+ ' [ ] '+getNewInfo)
            count++
            return steps.start();
          }
          else if(choice === 'a'){
  
          }else if(choice === 'cX'){
  
          }else if(choice === 'dX'){
  
          }else if(choice === 'q'){
              return steps.end()
          }
 
  },
  end: async () => {
    readline.close();
  },
};

steps.start();
