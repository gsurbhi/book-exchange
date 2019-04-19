import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../service/user.service.client";
import {User} from "../../../model/user.model.client";

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {

  username: string;
  users: User[];
  errorFlag = false;
  errorMessage: string;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }
  setParams(params) {
    this.username = params.username;
    this.loadUsers();
  }

  loadUsers(){
    this.userService.findAllUsers()
      .subscribe(users => this.users = users);
  }

  adminEditUser(){

  }

  ngOnInit() {
  }

  adminDeleteUser(username){
    this.userService.deleteUser(username)
      .subscribe(() => {
      this.loadUsers()},
        (error: any) => {
          this.errorMessage = error._body;
          this.errorFlag = true;
        })
  }

  flag = false;
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
