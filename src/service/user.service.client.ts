import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, URLSearchParams} from '@angular/http';
import {environment} from '../environments/environment';
import {Router} from '@angular/router';
import {User} from '../model/user.model.client';
import {map} from 'rxjs/operators';


@Injectable()
export class UserService {

  baseURL: string;

  constructor(private http: Http,
              private router: Router) {
    this.baseURL = environment.baseUrl;
  }

  register(user: User) {
    const requestOptions = new RequestOptions();
    requestOptions.withCredentials = true;

    return this.http.post(this.baseURL + '/api/register', user)
      .pipe(map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      ));
  }

  login(user: User) {
    const requestOptions = new RequestOptions();
    requestOptions.withCredentials = false;

    return this.http.post(this.baseURL + '/api/login', user, requestOptions)
      .pipe(map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      ));
  }

}
