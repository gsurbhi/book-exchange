import { Component, OnInit } from '@angular/core';
import {Posting} from '../../../model/posting.model.client';
import {PostingService} from '../../../service/post.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WishList} from "../../../model/wishlist.model.client";
import {WishListService} from "../../../service/wishlist.service.client";
import {UserService} from "../../../service/user.service.client";
import {RequestService} from "../../../service/request.service.client";
import {connectableObservableDescriptor} from "rxjs/internal/observable/ConnectableObservable";
import {element} from "protractor";

@Component({
  selector: 'app-my-posting-list',
  templateUrl: './my-posting-list.component.html',
  styleUrls: ['./my-posting-list.component.css']
})
export class MyPostingListComponent implements OnInit {

  postings: Posting[];
  username: string;
  flag = false;
  wId: number;
  isAdmin: boolean;
  requestspId = new Map();
  requestedBy: string;
  requests: Request[];
  constructor(private postingService: PostingService, private route: ActivatedRoute,
              private router: Router, private wishlistService: WishListService,
              private userService: UserService, private requestService: RequestService) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  ngOnInit() {
    this.wishlistService.findWishlistById(this.username).subscribe((wishlist: WishList) => {
      this.wId = wishlist.wId;
    });
    this.loadProfile(this.username);
  }

  loadProfile(username) {
    this.userService.profile(this.username)
      .subscribe(user => {
          this.isAdmin = user.admin;
        }
      );

  }
  setParams(params) {
    this.requests = [];
    this.username = params.username;
    this.loadPostings(this.username);
    this.loadRequests();
  }

  loadRequests() {
    this.requestService.findAllRequests()
      .then(requests => this.requests = requests)
      .then((requests) => {
        requests.forEach(element => {
          this.requestspId.set(
            element.posting.pId, element.username);
        });
      });
  }

  foo(pId) {
    console.log(this.requestspId);
  }

  loadPostings(username) {
    this.postingService.getPostingsById(this.username)
      .subscribe((postingsList) => {
        this.postings = postingsList;
      });
  }

  deletePost(pId) {
    this.postingService.deletePosting(pId)
      .subscribe(() => {
        this.loadPostings(this.username);
      });
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
}
