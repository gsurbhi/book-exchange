export class WishList {
  wId: number;
  isbn: number;
  date: Date;
  constructor(wId: number, isbn: number, date: Date) {
    this.wId = wId;
    this.isbn = isbn;
    this.date = date;
  }
}
