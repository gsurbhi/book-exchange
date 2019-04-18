import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import {Router} from '@angular/router';
import {environment} from '../environments/environment';
import {map} from 'rxjs/operators';
import {WishList} from '../model/wishlist.model.client';

@Injectable()
export class WishListService {

  baseURL: string;

  constructor(private http: Http,
              private router: Router) {
    this.baseURL = environment.baseUrl;
  }

  createWishlist(wishlist: WishList) {
    const requestOptions = new RequestOptions();
    requestOptions.withCredentials = true;
    return this.http.post(this.baseURL + '/api/wishlist', wishlist)
      .pipe(map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      ));
  }
}
