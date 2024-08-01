// Day 7  -  Objects

let book = {
    bookTitle: "Reverend Insanity",
    author: "Gu Zhen Ren",
    year: 2011,
    banned: true,
    info: function() {
        console.log("Book Title -", this.bookTitle, "| Author -", this.author, "| Year -", this.year, "| Banned -", this.banned, "\n");
    },
    updateYear: function(newYear) {
        this.year = newYear;
        console.log(this);
    }
};

let library = {
    name: "City Library",
    books: [
        {
            bookTitle: "Reverend Insanity",
            author: "Gu Zhen Ren",
            year: 2012,
            banned: true,
            info: function() {
                console.log("Book Title -", this.bookTitle, "| Author -", this.author, "| Year -", this.year, "| Banned -", this.banned);
            }
        },
        {
            bookTitle: "1984",
            author: "George Orwell",
            year: 1949,
            banned: false,
            info: function() {
                console.log("Book Title -", this.bookTitle, "| Author -", this.author, "| Year -", this.year, "| Banned -", this.banned);
            }
        },
        {
            bookTitle: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960,
            banned: false,
            info: function() {
                console.log("Book Title -", this.bookTitle, "| Author -", this.author, "| Year -", this.year, "| Banned -", this.banned);
            }
        }
    ],
    libraryInfo: function() {
        console.log("Library Name -", this.name);
        console.log("Books:");
        this.books.forEach(book => book.info());
    }
};

console.log(book, "\n"); // Task 1

console.log(book.bookTitle, book.author, "\n"); // Task 2

book.info(); // Task 3

book.updateYear(2012); // Task 4
console.log("\n");

console.log(library, "\n"); // Task 5

library.libraryInfo(); // Task 6
console.log("\n");

// Task 7 required the showcase of 'this' keyword, it has already been used in the passing.

// Task 8
for (let key in book) {
    console.log(key, "-", book[key],);
}
console.log("\n");


// Task 9
console.log(Object.keys(book));
console.log(Object.values(book));