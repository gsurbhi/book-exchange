import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WishListService} from '../../../service/wishlist.service.client';
import {Book} from '../../../model/book.model.client';
import {UserService} from "../../../service/user.service.client";

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  username: string;
  flag = false;
  books: Book[];
  wId: number;
  isAdmin: boolean;
  constructor(private route: ActivatedRoute, private wishlistService: WishListService, private userService: UserService) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }
  setParams(params) {
    this.username = params.username;
    this.wId = params.wId;
    this.fetchBooks();
  }
  ngOnInit() {
    this.loadProfile(this.username);
  }
  loadProfile(username) {
    this.userService.profile(this.username)
      .subscribe(user => {
          this.isAdmin = user.admin;
        }
      );

  }
  openNav() {
    if (!this.flag) {
      document.getElementById('mySidebar').style.width = '250px';
      document.getElementById('main').style.marginLeft = '250px';
      this.flag = true;
    } else {
      document.getElementById('mySidebar').style.width = '0';
      document.getElementById('main').style.marginLeft = '0';
      this.flag = false;
    }
  }

  fetchBooks() {
    this.wishlistService.getAllBooks(this.wId)
      .subscribe((books) => {
        this.books = books;
      });
  }

  deleteBook(book) {
    console.log(book);
    this.wishlistService.deleteBook(this.wId, book)
      .subscribe(() => {
        this.fetchBooks();
      });
  }
}
