class Book {
  #pages;
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.#pages = pages;
  }
  getDetails() {
    console.log(`${this.title} by ${this.author} and of pages ${this.#pages}`);
  }
  isLongBook() {
    if (this.#pages > 300) {
      return true;
    }
    return false;
  }
}

let book1 = new Book("1984", "George Orwell", 328);
book1.getDetails(); // "1984 by George Orwell and of pages 328"

class TextBook extends Book {
  constructor(title, author, pages, genre) {
    super(title, author, pages);
    this.genre = genre;
  }
  getDetails() {
    super.getDetails();
    console.log(`Genre: ${this.genre}`);
  }
}
let textbook1 = new TextBook(
  "Introduction to Algorithms",
  "Thomas H. Cormen",
  1312,
  "Computer Science"
);
textbook1.getDetails(); // "Introduction to Algorithms by Thomas H. Cormen and of pages 1312"
textbook1.isLongBook(); // true
console.log(textbook1.isLongBook()); // true

class AudioBook extends Book {
  constructor(title, author, pages, narrator) {
    super(title, author, pages, this.getDetails);
    this.narrator = narrator;
  }
}
