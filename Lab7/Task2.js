/*
Student Name: Ankit kumar
Student Id:-BCS2025392
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 7
Task Number: 2
*/

// Task 2: ES6 Class Book
class Book {
    constructor(title, pages) {
        this.title = title;
        this.pages = pages;
    }

    summary() {
        return `${this.title} has ${this.pages} pages`;
    }
}

// Instantiate Book with Algorithms, 320 pages
const book1 = new Book("Algorithms", 320);

console.log(book1.summary());
