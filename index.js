class Book {
  constructor(title, author, ISBN, availability = true) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.availability = availability;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(ISBN) {
    this.books = this.books.filter((book) => book.ISBN !== ISBN);
  }

  displayAvailableBooks() {
    console.log("Available Books");
    this.books.forEach((book, index) => {
      if (book.availability) {
        console.log(`${index + 1}, ${book.title} by ${book.author}`);
      }
    });
  }
}

class ReferenceBook extends Book {
  constructor(title, author, ISBN, category, availability = true) {
    super(title, author, ISBN, availability);
    this.category = category;
  }
}

// create instances of the library, book, and referenceBook classes

const library = new Library();

// add books to the library
const book1 = new Book(
  "The Greate Gatsby",
  "F. Scott Fitzgerald",
  "9780743273565"
);
const book2 = new Book("To kill a Mockingbird", "Harper Lee", "9780060935467");
const book3 = new ReferenceBook(
  "1984",
  "George Orwell",
  "9780451524935",
  "Dystopian Fiction"
);
const book4 = new Book("Radical Candor", "Kim Scott", "9781250235374");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

// Display available books
library.displayAvailableBooks();

console.log("\nRemoving book....");

// Remove a book from the library
library.removeBook("9780743273565");

// Display available books again
library.displayAvailableBooks();
