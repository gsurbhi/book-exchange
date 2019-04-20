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
          console.log(data);
          return data;
        }
      ));
  }

  addToWishlist(book, wId) {
    const requestOptions = new RequestOptions();
    requestOptions.withCredentials = true;
    return this.http.post(this.baseURL + '/api/my-wishlist/' + wId, book)
      .pipe(map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      ));
  }

  getAllBooks(wId) {
    const requestOptions = new RequestOptions();
    requestOptions.withCredentials = true;
    return this.http.get(this.baseURL + '/api/books/' + wId)
      .pipe(map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      ));
  }
  findWishlistById(username) {
    const requestOptions = new RequestOptions();
    requestOptions.withCredentials = true;
    return this.http.get(this.baseURL + '/api/my-wishlist/' + username)
      .pipe(map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      ));
  }

  deleteBook(wId, book) {
    const url = this.baseURL + '/api/my-wishlist/' + wId;
    return this.http.delete(url, book)
      .pipe(map((response: Response) => {
        return response.json();
      }));
  }
}
