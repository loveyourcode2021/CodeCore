
const { program } = require('commander');

program
  .description('A sample application to parse options')
  .option('-a, --output <VALUE>', 'Specify a VALUE', 'Output')

program.parse();

const options = program.opts();



const output = !options.output ? 'no' : options.output;
const drawTxt = !options.output ? 'draw.txt' : options.output;
console.log('Options detected:', output);