class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
    toString() {
        let num = "";
        if (this.value == 1) {
            num = "Ace";
        } else if (this.value == 11) {
            num = "Jack";
        } else if (this.value == 12) {
            num = "Queen";
        } else if (this.value == 13) {
            num = "King";
        } else {
            num = this.value;
        }
        let suit = upperFirstLetter(this.suit);
        console.log(`Card {${num} of ${suit}}`);
    };
}

function upperFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const aceOfSpades = new Card(1, 'spades');
const tenOfHearts = new Card(10, 'hearts');
const kingOfDiamonds = new Card(13, 'diamonds');
aceOfSpades.toString();
tenOfHearts.toString();
kingOfDiamonds.toString();


class Deck {
    constructor(cards) {
        this.cards = cards;
    }

    reset() {
        this.cards = [];
        const suitArr = ["clubs", "spades", "hearts", "diamonds"];
        for (let suit = 0; suit < suitArr.length; suit++) {
            for (let number = 1; number < 14; number++) {
                this.cards.push(new Card(number, suitArr[suit]));
            }
        }
    }

    shuffle() {
        if (this.cards.length > 0) {
            for (let index = 0; index < this.cards.length; index++) {
                const randomNum = parseInt(Math.random() * (this.cards.length - 1));
                const temp = this.cards[randomNum];
                this.cards[randomNum] = this.cards[index];
                this.cards[index] = temp;
            }
        } else {
            return 'Please set the card first!';
        }
    }

    draw() {
        if (this.cards.length > 0) {
            const result = this.cards.shift();
            return result;
        } else {
            return 'Please set the card first!';
        }
    }
}