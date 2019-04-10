export class Book {
  isbn: number;
  author: string;
  title: string;
  description: string;
  constructor(isbn: number, author: string, title: string, description: string) {
    this.isbn = isbn;
    this.author = author;
    this.title = title;
    this.description = description;
  }
}
