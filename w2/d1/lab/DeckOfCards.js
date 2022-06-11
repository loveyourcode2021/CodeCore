

const deck1 = {
    cards: [],
    names: ["space","heart","diamond","clubs"],
    reset(){
        for(let i  = 0 ; i < this.names.length; i++){
            for(let j = 1 ; j <=13; j++){
                this.cards.push({"suits":this.names[i],"number":j})
            }
        }
    },
    shuffle(){
        if(this.cards.length > 0){
            for(let i = this.cards.length-1; i > 0 ; i--)
            {
                const j = Math.floor(Math.random() * (i));
                [this.cards[i], this.cards[j]] = [this.cards[j],this.cards[i]]
            }
        }
    },
    draw(){
        return this.cards.pop();
    }
}


deck1.reset();
console.log(deck1.cards);
deck1.shuffle();
console.log(deck1.cards)

