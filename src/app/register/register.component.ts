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
    const firstname = this.registerForm.value.firstname;
    const lastname = this.registerForm.value.lastname;

    const user = new User(username, password, email);
    user.firstName = firstname;
    user.lastName = lastname;
    this.userService.register(user).subscribe((user: User) => {
        this.router.navigate(['/login']);
      }
    );
  }
}
