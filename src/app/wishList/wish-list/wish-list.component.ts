import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WishListService} from '../../../service/wishlist.service.client';
import {Book} from '../../../model/book.model.client';

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
  constructor(private route: ActivatedRoute, private wishlistService: WishListService) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }
  setParams(params) {
    this.username = params.username;
    this.wId = params.wId;
    this.fetchBooks();
  }
  ngOnInit() {
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
}
