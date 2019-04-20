import {Component, OnInit} from '@angular/core';
import {PostingService} from '../../service/post.service.client';
import {Posting} from '../../model/posting.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Request} from '../../model/request.model.client';
import {RequestService} from '../../service/request.service.client';
import {User} from '../../model/user.model.client';
import {UserService} from '../../service/user.service.client';
import {WishListService} from '../../service/wishlist.service.client';
import {WishList} from '../../model/wishlist.model.client';
import {Book} from "../../model/book.model.client";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  postings: Posting[];
  username;
  password;
  requests: Request[];
  flag = false;
  errorFlag = false;
  errorMessage: string;
  alreadyRequestPIds: number[];
  loggedUser: User;
  firstName;
  lastName;
  emailId;
  cellNumber;
  isAdmin: boolean;
  wId: number;
  books: number[];


  constructor(private postingService: PostingService, private route: ActivatedRoute,
              private requestService: RequestService, private router: Router,
              private userService: UserService, private wishlistService: WishListService) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  setParams(params) {
    this.username = params['username'];
    this.requests = [];
    this.alreadyRequestPIds = [];
    this.books = [];
    this.loadRequests();
    this.loadProfile(this.username);
    this.loadAllPostings();
  }

  // fetchBooks() {
  //   this.wishlistService.getAllBooks(this.wId)
  //     .subscribe((books) => {
  //       this.books = books;
  //     });
  // }
  loadRequests() {
    this.requestService.findAllRequests()
      .then(requests => this.requests = requests)
      .then((requests) => {
        requests.forEach(element => {
          this.alreadyRequestPIds.push(
            element.pId);
        });
      });
  }

  loadProfile(username) {
    this.userService.profile(this.username)
      .subscribe(user => {
          this.loggedUser = user.JSON;
          this.isAdmin = user.admin;
        }
      );

  }

  loadAllPostings() {
    this.postingService.getAllPostings()
      .subscribe((postingsList) => {
        this.postings = postingsList;
      });
  }

  requestPost(newPost) {
    const user = new User(this.username, '', '', '', '', '', false, undefined);
    const newRequest = new Request(new Date(), user, newPost);
    this.requestService.create(newRequest).subscribe((request: Request) => {
        this.router.navigate(['/user/' + this.username + '/my-request']);
      },
      (error: any) => {
        this.errorMessage = error._body;
        this.errorFlag = true;
      }
    );
  }

  addToWishlist(posting) {
    this.wishlistService.addToWishlist(posting.book, this.wId).subscribe((wishlist: WishList) => {
      this.router.navigate(['/user/' + this.username + '/wish-list/' + this.wId]);
    });
  }

  ngOnInit() {
    this.wishlistService.findWishlistById(this.username).subscribe((wishlist: WishList) => {
      this.wId = wishlist.wId;
      this.wishlistService.getAllBooks(this.wId)
        .subscribe((books) => {
          books.forEach(element => {
            this.books.push(
              element.isbn);
        });
    });
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

  // admin panel functions

  adminDeletePost(pId) {
    this.postingService.deletePosting(pId).subscribe(() => {
        this.loadAllPostings();
      },
      (error: any) => {
        this.errorMessage = error._body;
        this.errorFlag = true;
      });
  }


}
