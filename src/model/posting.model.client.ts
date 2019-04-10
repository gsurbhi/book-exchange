import {User} from './user.model.client';
import {Book} from './book.model.client';

export class Posting {
  pId: number;
  date: Date;
  user: User;
  book: Book;
  constructor(pId: number, date: Date, user: User, book: Book) {
    this.pId = pId;
    this.date = date;
    this.user = user;
    this.book = book;
  }
}
