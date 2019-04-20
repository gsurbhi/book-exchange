import { Component, OnInit } from '@angular/core';
import {Request} from '../../../model/request.model.client';
import {RequestService} from '../../../service/request.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../service/user.service.client';
import {WishList} from '../../../model/wishlist.model.client';
import {WishListService} from '../../../service/wishlist.service.client';

@Component({
  selector: 'app-my-request-list',
  templateUrl: './my-request-list.component.html',
  styleUrls: ['./my-request-list.component.css']
})
export class MyRequestListComponent implements OnInit {

  requests: Request[];
  username: string;
  wId: number;
  isAdmin: boolean;
  flag = false;

  constructor(private route: ActivatedRoute, private requestService: RequestService,
              private router: Router, private userService: UserService, private wishlistService: WishListService) {
    this.route.params.subscribe(
      params => this.setParams(params));

  }

  setParams(params) {
    this.username = params.username;
    this.loadRequests(this.username);
  }

  loadProfile(username) {
    this.userService.profile(this.username)
      .subscribe(user => {
          this.isAdmin = user.admin;
        }
      );

  }
  loadRequests(username) {
    this.username = username;
    this.requestService.findRequestsForUser(username)
      .then(requests => this.requests = requests);
  }

  deleteRequest(pId) {
    this.requestService.deleteRequest(pId)
      .subscribe(() => {
        this.loadRequests(this.username);
      });
  }

  ngOnInit() {
    this.wishlistService.findWishlistById(this.username).subscribe((wishlist: WishList) => {
      this.wId = wishlist.wId;
    });
    this.loadProfile(this.username);
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


