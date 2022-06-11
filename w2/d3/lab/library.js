class Book{
    constructor(title, author, edition){
        this.title = title
        this.author = author;
        this.edition = edition
    }
}

class Library{
    constructor(){
        this.lib = []
    }
    shelve(book){
        this.lib.push(book)
        return this
    }

    findByTitle(title){
     
        this.lib.forEach(function (arrayItem) {
            if(arrayItem.title.toLowerCase().includes(title.toLowerCase()) === true){
                console.log(arrayItem.title);
                return arrayItem;
            }
        })

    }
    list(){
        console.log(this.lib)
        return this.lib
    }

}

const eloquentJS = new Book("Eloquent Javascript", ["Marijn Haverbeke"], 3);
const speakingJS = new Book("Speaking JavaScript", ["Dr. Axel Rauschmayer"], 1);
const theRustProgLang = new Book("The Rust Programming Language",
  ["Steve Klabnik", "Carol Nichols"],
  2
);


const lib = new Library();
lib.shelve(eloquentJS);
// See if you can make it possible to chain shelve calls
lib.shelve(speakingJS).shelve(theRustProgLang);
lib.findByTitle("eloquent"); // Book {title: "Eloquent Javascript", authors: Array(1), edition: 3}
lib.findByTitle("Rust"); // Book {title: "The Rust Programming Language", authors: Array(2), edition: 2}
lib.list();
// [

//   Book {title: "Eloquent Javascript", authors: Array(1), edition: 3},

//   Book {title: "The Rust Programming Language", authors: Array(2), edition: 2},

//   Book {title: "Speaking JavaScript", authors: Array(1), edition: 1},

// ]
console.log("The Rust Programming Language".includes("R"))