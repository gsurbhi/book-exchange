import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {WishList} from '../../../model/wishlist.model.client';
import {WishListService} from '../../../service/wishlist.service.client';

@Component({
  selector: 'app-wish-list-new',
  templateUrl: './wish-list-new.component.html',
  styleUrls: ['./wish-list-new.component.css']
})
export class WishListNewComponent implements OnInit {

  username: string;
  errorFlag = false;
  errorMessage: string;
  @ViewChild('f') registerForm: NgForm;
  constructor(private route: ActivatedRoute, private wishlistService: WishListService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params.username;
    });
  }
  createWishlist() {
    const isbn = this.registerForm.value.isbn;
    const wishList = new WishList(undefined, new Date());
    if ((isbn === undefined) || (isbn === '') || (isbn === null)) {
      this.errorFlag = true;
      return;
    }
    this.wishlistService.createWishlist(wishList).subscribe((wishlist: WishList) => {
        this.router.navigate(['/user/' + this.username + '/wish-list']);
      },
      (error: any) => {
        this.errorMessage = error._body;
        this.errorFlag = true;
      }
    );
  }

}
