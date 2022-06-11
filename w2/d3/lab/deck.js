function  upperFirstLetter(input){
    return 
}

class Card {
    constructor(num,suit) {
        this.num = num;
        this.suit = suit;
       
    }
   
    toString() {
        let num = "";
        switch(this.value){
            case 1:
                num = "Ace"
            case 11:
                num = "Jack"
            case 12:
                num = "Queen"
            case 13:
                num = "king"
            default:
                num = this.value
        }
  
        let suit = this.suit.charAt(0).toUpperCase()+this.suit.slice(1)
        console.log(`Card {${this.num} of ${suit}}`);
    };
}



const aceOfSpades = new Card(1, 'spades');
const tenOfHearts = new Card(10, 'hearts');
const kingOfDiamonds = new Card(13, 'diamonds');
aceOfSpades.toString();
tenOfHearts.toString();
kingOfDiamonds.toString();

class Deck extends cards{
    constructor() {
        this.cards = this.reset();
    }
  
    
    reset() {
        this.cards = [];
        const suitArr = ["clubs", "spades", "hearts", "diamonds"];
        for (let suit = 0; suit < suitArr.length; suit++) {
            for (let number = 1; number < 14; number++) {
               
                this.cards.push(new Card(number, suitArr[suit]));
            }
        }
        return this.cards;
    }

    shuffle(){
        if(this.cards.length> 0)
        {
            for(var i = 1 ; i < this.cards.length; i++)
            {
                const j = Math.floor(Math.random() * (i));
                [this.cards[i],this.cards[j] = this.cards[j],this.cards[i]]
            }
        }
      
    }

    draw(){
        return this.cards.pop();
    }
    
}

var deck = new Deck();
console.log(deck.reset())
console.log(deck.shuffle())
console.log(deck.cards)