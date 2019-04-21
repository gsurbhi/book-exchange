import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, URLSearchParams} from '@angular/http';
import {environment} from '../environments/environment';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';


@Injectable()
export class RequestService {

  baseURL: string;

  constructor(private http: Http,
              private router: Router) {
    this.baseURL = environment.baseUrl;
  }

  findRequestsForUser(username) {
    return fetch(this.baseURL + '/api/my-requests/' + username)
      .then((response) => {
        const data = response.json();
        return data;
      });
  }

  findAllRequests() {
    return fetch(this.baseURL + '/api/requests')
      .then(response => response.json());
  }

  create(request) {
    const requestOptions = new RequestOptions();
    requestOptions.withCredentials = true;
    return this.http.post(this.baseURL + '/api/my-request', request)
      .pipe(map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      ));
  }

  deleteRequest(pId) {
    const url = this.baseURL + '/api/request/' + pId;
    return this.http.delete(url)
      .pipe(map((response: Response) => {
        return response.json();
      }));
  }
}
