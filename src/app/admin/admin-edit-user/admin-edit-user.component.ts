import { Component, OnInit } from '@angular/core';
import {PostingService} from "../../../service/post.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../service/user.service.client";
import {User} from "../../../model/user.model.client";

@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './admin-edit-user.component.html',
  styleUrls: ['./admin-edit-user.component.css']
})
export class AdminEditUserComponent implements OnInit {


  errorFlag = false;
  errorMessage: string;
  username: string;
  userNameUpdate: string;
  user;
  password;
  firstName;
  lastName;
  emailId;
  cellNumber;
  isAdmin;



  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }


  editUser(){
    this.user.username= this.userNameUpdate;
    this.user.password = this.password;
    this.user.firstName = this.firstName;
    this.user.lastName = this.lastName;
    this.user.emailId = this.emailId;
    this.user.cellNumber = this.cellNumber;
    this.user.isAdmin = this.isAdmin;
    this.userService.updateUser(this.user)
      .then(user =>
        this.user = user

      ).then(() => this.router.navigate(['/user/' + this.username + '/admin-user-list']));
  }

  setParams(params) {
    this.username = params.username;
    this.userNameUpdate = params.userName;
  }

  ngOnInit() {
    this.userService.profile(this.userNameUpdate)
      .subscribe(user => {
          this.userNameUpdate = user.username;
          this.password = user.password;
          this.firstName = user.firstName;
          this.lastName = user.lastName;
          this.emailId = user.emailId;
          this.cellNumber = user.cellNumber;
          this.isAdmin = user.isAdmin;
          this.user = user;
        }
      );
    }

}
