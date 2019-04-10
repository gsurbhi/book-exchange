import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service.client';
import {User} from '../../model/user.model.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = '';
  errorFlag = false;

  @ViewChild('form') loginForm: NgForm;

  constructor(private router: Router, private userService: UserService) {  }

  ngOnInit() {
  }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    const user = new User(this.username, this.password, '', '', '', '', false);
    this.userService.login(user).subscribe((user: User) => {
        this.router.navigate(['/dashboard',this.username]);
      }
    );
  }
}
