function SubstitutionCipher(abc1, abc2){
    this.a = abc1;
    this.b = abc2;

    this.encode = function(input){
        let result = "";
        for(let char of input){
            let index = abc1.indexOf(char)
            result += abc2[index];
        }
        console.log(result)
        return result;
    }

    this.decode = function(input){
        let result = "";
        for(let char of input){
            let index = abc2.indexOf(char)
            result += abc1[index];
        }
        console.log(result)  
        return result;
    }
}


let abc1 = "abcdefghijklmnopqrstuvwxyz"; 
let abc2 = "etaoinshrdlucmfwypvbgkjqxz"; 
const sub = new SubstitutionCipher(abc1, abc2); 
sub.encode("abc") // => "eta"
sub.encode("xyz") // => "qxz"
sub.encode("aeiou") // => "eirfg"
sub.decode("eta") // => "abc"
sub.decode("qxz") // => "xyz"
sub.decode("eirfg") // => "aeiou"
