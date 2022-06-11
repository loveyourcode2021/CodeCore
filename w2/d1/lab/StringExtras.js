let a = 'you';



let StringExtras = {
    input:"",
    diff:0,
    setValue(b){
      this.input = b  
    },
    calCulate(b){
        return  num = (b-this.input.length> 0) ? b-this.input.length : 0 ;
    },
    repeat(a,b){
        this.input = a;
        return this.input.repeat(b);
    },
    leftPad(a,b){
        this.input = a;
        num = (b-this.input.length> 0) ? b-this.input.length : 0  
        return " ".repeat(this.calCulate(b))+this.input
    },
    rightPad(a,b){
        this.input = a;
        return this.input+" ".repeat(this.calCulate(b)) 
    },
    capitalize(b){
        this.input = b;
        return this.input[0].toUpperCase()+this.input.slice(1,this.input.length) 
    },
    pad(a, b){
        this.input = a;
        let numPad1 = 0;
        let numPad2 = 0;
        let total = b-this.input.length
        numPad1 = total%2 !== 0 ? ((total+1)/2) : total/2
        numPad2 = total%2 !== 0 ? ((total+1)/2)-1 : total/2
        console.log((" ".repeat(numPad1)+this.input+" ".repeat(numPad2)).length)
        return "\'"+" ".repeat(numPad1)+this.input+" ".repeat(numPad2)+"\'"
    }

    
}
/**/
console.log(StringExtras.repeat(a, 3)); // returns 'youyouyou'

console.log(StringExtras.repeat(' ', 6)); // returns '      '

console.log(StringExtras.leftPad(a, 5)); // returns '  you'

console.log(StringExtras.leftPad(a, 1)); // returns 'you'

console.log(StringExtras.leftPad(a, 3)); // returns 'you'

console.log(StringExtras.leftPad(a, 4)); // returns ' you'

console.log(StringExtras.rightPad(a, 6) + 'me'); // returns 'you   me'

console.log(StringExtras.pad(a, 5)); // returns ' you '

console.log(StringExtras.pad(a, 6)); // returns '  you '

console.log(StringExtras.pad(a, 10)); // returns '    you   '

console.log(StringExtras.capitalize(a)); // returns 'You'