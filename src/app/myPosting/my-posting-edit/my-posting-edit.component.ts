import {Component, OnInit, ViewChild} from '@angular/core';
import {Posting} from '../../../model/posting.model.client';
import {PostingService} from '../../../service/post.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../../../model/book.model.client';
import {User} from '../../../model/user.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-my-posting-edit',
  templateUrl: './my-posting-edit.component.html',
  styleUrls: ['./my-posting-edit.component.css']
})
export class MyPostingEditComponent implements OnInit {
  pId: number;
  username: string;
  posting: Posting;
  book: Book;
  title: string;
  description: string;
  author: string;
  isbn: number;
  errorFlag = false;
  errorMessage: string;
  @ViewChild('f') postEditForm: NgForm;
  constructor(private postingService: PostingService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }
  ngOnInit() {
    this.postingService.getPostingById(this.pId)
      .subscribe((posting) => {
        this.posting = posting;
        this.book = this.posting.book;
        this.title = this.book.title;
        this.description = this.book.description;
        this.author = this.book.author;
        this.isbn = this.book.isbn;
      });
  }

  setParams(params) {
    this.username = params.username;
    this.pId = params.posting;
  }

  editPosting() {
    if ((this.title === undefined) || (this.title === '') || (this.title === null)) {
      this.errorFlag = true;
      return;
    }

    const book = new Book(this.isbn, this.author, this.title, this.description);
    const user = new User(this.username, '', '', '', '', '', false, undefined);
    const posting = new Posting(this.pId, undefined, user, book);
    this.postingService.updatePosting(this.pId, posting)
      .subscribe((posting) => {
        this.posting = posting;
        this.router.navigate(['user/', this.username, 'my-posting']);
      });
  }
  deletePosting() {
    this.postingService.deletePosting(this.pId)
      .subscribe(() => {
        this.router.navigate(['user', this.username, 'my-posting']);
      });
  }
}
