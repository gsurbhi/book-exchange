import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {UserService} from "../../service/user.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserService,
              private route: ActivatedRoute) {
    this.updateUser = this.updateUser.bind(this);
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  setParams(params) {
    this.username = params['username'];

  }

  user;
  username;
  password;
  firstName;
  lastName;
  emailId;
  cellNumber;
  isAdmin;


  updateUser() {
    this.user.password = this.password;
    this.user.firstName = this.firstName;
    this.user.lastName = this.lastName;
    this.user.emailId = this.emailId;
    this.user.cellNumber = this.cellNumber;
    this.user.isAdmin = this.isAdmin;
    this.service.updateUser(this.user)
      .then(user =>
        this.user = user
      );
    console.log(this.user);
  }

  ngOnInit() {
    this.service
      .profile(this.username)
      .then(user => {
          this.username = user.username;
          this.password = user.password;
          this.firstName = user.firstName;
          this.lastName = user.lastName;
          this.emailId = user.emailId;
          this.cellNumber = user.cellNumber;
          this.isAdmin = user.isAdmin;
          this.user = user;

        }
      );
    console.log(this.user);
  }

}
