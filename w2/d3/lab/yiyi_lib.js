class Book {
    constructor(title, authors, edition) {
        this.title = title;
        this.authors = authors;
        this.edition = edition;
    }
}


class Library {
    constructor() {
        this.books = [];
    }

    shelve(book) {
        this.books.push(book);
        this.books.sort((a, b) => { a.title.localeCompare(b.title) });
        return this;
    }
    findByTitle(string) {
        return this.books.find(book => book.title.toLowerCase().includes(string.toLowerCase()));
    }
    list() {
        return this.books;
    }
}

const eloquentJS = new Book("Eloquent Javascript", ["Marijn Haverbeke"], 3);
const speakingJS = new Book("Speaking JavaScript", ["Dr. Axel Rauschmayer"], 1);
const theRustProgLang = new Book(
    "The Rust Programming Language",
    ["Steve Klabnik", "Carol Nichols"],
    2
);

const lib = new Library();
lib.shelve(eloquentJS);

console.log(lib.shelve(speakingJS).shelve(theRustProgLang));
console.log(lib.findByTitle("eloquent"));
console.log(lib.findByTitle("Rust"));
console.log(lib.list());