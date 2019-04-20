import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service.client';
import {User} from '../../model/user.model.client';
import {WishList} from "../../model/wishlist.model.client";
import {WishListService} from "../../service/wishlist.service.client";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorFlag = false;
  errorMessage = '';
  error = '';
  public wishlistId: number;

  @ViewChild('f') registerForm: NgForm;

  constructor(private router: Router, private userService: UserService, private wishlistService: WishListService) {
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
      const wishlist = new WishList(undefined, new Date());
      this.wishlistService.createWishlist(wishlist).subscribe((wishlist1) => {
          this.wishlistId = wishlist1.wId;

          const wis = new WishList(this.wishlistId, new Date());
          const user = new User(username, password, firstName, lastName, email, '', false, wis);
          this.userService.register(user).subscribe((user: User) => {
              if (user === null || user === undefined) {
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
      );
    }
  }
}
