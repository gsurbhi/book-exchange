import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, URLSearchParams} from '@angular/http';
import {environment} from '../environments/environment';
import {Router} from '@angular/router';
import {Posting} from '../model/posting.model.client';
import {map} from 'rxjs/operators';


@Injectable()
export class PostingService {

  baseURL: string;

  constructor(private http: Http,
              private router: Router) {
    this.baseURL = environment.baseUrl;
  }

  getAllPostings() {
    const requestOptions = new RequestOptions();
    requestOptions.withCredentials = true;
    return this.http.get(this.baseURL + '/api/postings')
      .pipe(map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      ));
  }
  getPostingsById(username) {
    const requestOptions = new RequestOptions();
    requestOptions.withCredentials = true;
    return this.http.get(this.baseURL + '/api/my-postings/' + username)
      .pipe(map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      ));
  }
  getPostingById(pId) {
    const requestOptions = new RequestOptions();
    requestOptions.withCredentials = true;
    return this.http.get(this.baseURL + '/api/my-posting/' + pId)
      .pipe(map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      ));
  }
  create(posting) {
    const requestOptions = new RequestOptions();
    requestOptions.withCredentials = true;
    return this.http.post(this.baseURL + '/api/my-posting', posting)
      .pipe(map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      ));
  }
  updatePosting(pId, posting) {
    const url = this.baseURL + '/api/posting/' + pId;
    const updatedPosting = new Posting(pId, undefined, posting.user, posting.book);
    return this.http.put(url, updatedPosting)
      .pipe(map((response: Response) => {
        return response.json();
      }
      ));
  }
  deletePosting(pId) {
    const url = this.baseURL + '/api/posting/' + pId;
    return this.http.delete(url)
      .pipe(map((response: Response) => {
        return response.json();
      }));
  }
}
