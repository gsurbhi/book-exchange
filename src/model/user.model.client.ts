import {WishList} from "./wishlist.model.client";

export class User {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  emailId: string;
  cellNumber: string;
  isAdmin: boolean;
  wishList: WishList;
  constructor(username: string, password: string, firstName: string, lastName: string, emailId: string,
              cellNumber: string, isAdmin: boolean, wishlist: WishList) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailId = emailId;
    this.cellNumber = cellNumber;
    this.isAdmin = isAdmin;
    this.wishList = wishlist;
  }
}
