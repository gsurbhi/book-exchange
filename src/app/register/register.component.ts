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
  errorMessage = '';
  error = '';

  @ViewChild('f') registerForm: NgForm;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  register() {
    const username = this.registerForm.value.username;
    const password = this.registerForm.value.password;
    const verPassword = this.registerForm.value.verifypassword;
    const email = this.registerForm.value.email;
    const firstName = this.registerForm.value.firstname;
    const lastName = this.registerForm.value.lastname;

    if (password !== verPassword) {
      this.errorMessage = 'Passwords do not match!';
      this.errorFlag = true;
    } else {
      const user = new User(username, password, firstName, lastName, email, '', false);
      this.userService.register(user).subscribe((user: User) => {
        if (user === null || user === undefined) {
          console.log("hey");
          console.log(user);
          this.errorMessage = 'Username already exists';
          this.errorFlag = true;
        } else {
          this.router.navigate(['/login']);
        }
        },
        (error: any) => {
          this.errorMessage = 'Username already exists!';
          this.errorFlag = true;
        }
      );
    }
  }
}
