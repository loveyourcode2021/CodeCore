#! /usr/bin/env node
const { program } = require('commander');

program
  .description('A sample application to parse options')
  .option('-a, --output <VALUE>', 'Specify a VALUE', 'Output')

program.parse();

const options = program.opts();


//checking out the input
const output = !options.output ? 'no' : options.output;
const drawTxt = !options.output ? 'draw.txt' : options.output;
const swap = !options.output ? 2 : 3;
console.log('Options detected:', output);

class Turtle {
    constructor(x, y) {
      this.y = y;
      this.x = x;
      this.tractX = 0;
      this.tractY = 0;
      this.boundary = [];
      this.isTurnRight = 0;
      
      this.allPointArray = [];
      this.setSize(20);
      this.result = ""
      console.log("init", this.y, this.x);
    }
  
    setSize(length=6) {
      for (let x = 0; x < length; x++) {
        this.boundary[x] = [];
        for (let y = 0; y < length; y++) {
            if(this.boundary[x][y] !== " ■ ")
            {
              this.boundary[x][y] = " □ ";
            }
          
        }
      }
      return this;
    }
  
    forward(steps) {
      steps = steps + 1;
      if (this.x >= this.totalSize) {
          throw new Error("out of x axis boundary");
      }
      switch (this.isTurnRight) {
        //go east
        case 0:
          let x = this.x
          for (let column = x; column < x+ steps; column++) {
            this.boundary[this.y][column] = " ■ ";
            this.tractX = column;
          }
          this.x = this.tractX;
          console.log("moved to east", this.y, this.x);
          return this;
        //go south
        case 1:
          for (let row = this.y; row < this.y + steps; row++) {
              
            this.boundary[row][this.x] = " ■ ";
            this.tractY = row;
          }
          this.y = this.tractY;
          console.log("moved to south", this.y, this.x);
          return this;
        //go west
        case 2:
          // moving into west
          // asssign the current y position to column
          // count the total steps
          var step = steps - 1;
          for (let column = this.x; column >= this.x - step; column--, steps--) {
            //as we are moving into the west, we can
            if (steps >= 0) {
              this.boundary[this.y][column] = " ■ ";
              this.tractX = column;
            } else {
              break;
            }
          }
          this.x = this.tractX;
          console.log("moved to west", this.y, this.x);
          return this;
  
        //go north
        case 3:
          // moving into north
          
          for (let row = this.y; row >= 0; row--, steps--) {
            if (steps > 0) {
              this.boundary[row][this.x] = " ■ ";
              this.tractY = row;
            } else {
              break;
            }
          }
          this.y = this.tractY;
          console.log("moved to North", this.y, this.x);
          return this;
  
        default:
          return this;
      }
    }
  
    right() {
      this.isTurnRight = (this.isTurnRight + 1) % 4;
      console.log("turn -> right ", this.isTurnRight);
      return this;
    }
  
    left() {
      this.isTurnRight = (this.isTurnRight + 3) % 4;
      console.log("turn -> left ", this.isTurnRight);
      return this;
    }
  
    print() {
      let getResult = ""
      for (let i = 0; i < this.boundary.length; i++) {
        getResult = this.boundary[i].join("").toString()
        console.log(getResult);
        this.lines = this.lines + getResult+"-"
      }
      this.writeIntoFile();
      return this;
    }
    writeIntoFile(){
      const fs = require('fs')
      var draw = fs.createWriteStream(drawTxt, {flags: 'a' })
      var writeLine = (line="\n") => draw.write(`\n${line}`);
      this.lines  = this.lines.split("-")
      var skipFirst = false
      for(let line of this.lines){
          if(skipFirst === false){
              let x = line.slice(9)
              skipFirst = true;
              writeLine(x)
          }else{
              writeLine(line)
          }
      }
      return this
    }
    allPoints() {
      for (let i = 0; i < this.boundary.length; i++) {
        for (let j = 0; j < this.boundary[i].length; j++) {
          if (this.boundary[i][j] === " ■ ") {
            this.allPointArray.push([i, j]);
          }
        }
      }
      console.log(this.allPointArray);
      return this;
    }
  
    
  }
  
  new Turtle(0, 0)
    .forward(5)
    .right()
    .forward(5)
    .right()
    .forward(5)
    .right()
    .forward(5)
    .print().allPoints();
  
    new Turtle(0, 4)
    .forward(3)
    .left()
    .forward(3)
    .right()
    .forward(5)
    .right()
    .forward(8)
    .right()
    .forward(5)
    .right()
    .forward(3)
    .left()
    .forward(3)
    .print().allPoints();
  
  
  var argv = process.argv;
  console.log(argv.length)
  /**
  $ node ./turtle.js t5,5-f10-r-f5-r-f10-r-f5-r-f2-r-f5-l-f2-l-f5
  $ node ./turtle.js f10-r-r-f10-l-f5-l-f10-r-f5-r-f11
   */
  

// check out the command line and switch the index



if(argv.length > 1 )
{
    let commands  = argv[swap].split("-")
    console.log(commands[0].toString())
    let x = 0
    let y = 0
    let buildCommands = undefined
  
   
    for(var i = 0; i < commands.length; i++)
    {
      if(i === 0){
          if(commands[0].includes('f')){
              let steps = parseInt(commands[0].slice(1))
              console.log(steps)
              buildCommands = new Turtle(0,0).forward(steps)
             
          }else if(commands[0].includes('t')){
              x = parseInt(commands[0].charAt(1))
              y = parseInt(commands[0].charAt(3))
              console.log(commands[0])
              buildCommands = new Turtle(x,y)
             
          }
      }else{
          let cmd  = commands[i].charAt(0)
          if(cmd === 'f'){
              let steps1 = parseInt(commands[i].slice(1))
              
              buildCommands.forward(steps1)
              continue;
          }
          else if(cmd ==='r'){
              buildCommands.right()
              continue;
          }
          else if(cmd ==='l'){
              buildCommands.left()
              continue;
          }
      }
    }
    buildCommands.print()
    
  }
  