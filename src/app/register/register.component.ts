import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service.client';
import {User} from '../../model/user.model.client';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorFlag = false;
  errorMsg = '';

  @ViewChild('f') registerForm: NgForm;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  register() {
    var username = this.registerForm.value.username;
    var password = this.registerForm.value.password;
    var ver_password = this.registerForm.value.verifypassword;
    var email = this.registerForm.value.email;
    var firstname = this.registerForm.value.firstname;
    var lastname = this.registerForm.value.lastname;

    if (password != ver_password) {
      this.errorMsg = 'The passwords do not match. Please re-enter the passwords.'
      this.errorFlag = true;
    }
    else{
      var user = new User(username, password, email);
      user.firstName = firstname;
      user.lastName = lastname;
      this.userService.register(user).subscribe((user: User) => {
          this.router.navigate(['/login']);
        },
        (error: any) => {
          this.errorMsg = error._body;
          this.errorFlag = true;
        }
      );
    }
  }
}
