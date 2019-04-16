import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Posting} from '../../../model/posting.model.client';
import {Book} from "../../../model/book.model.client";
import {NgForm} from "@angular/forms";
import {User} from "../../../model/user.model.client";
import {PostingService} from "../../../service/post.service.client";

@Component({
  selector: 'app-my-posting-new',
  templateUrl: './my-posting-new.component.html',
  styleUrls: ['./my-posting-new.component.css']
})
export class MyPostingNewComponent implements OnInit {
  username: string;
  errorFlag = false;
  errorMessage: string;

  @ViewChild('f') registerForm: NgForm;
  constructor(private route: ActivatedRoute, private postingService: PostingService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params.username;
    });
  }

  createNewPosting() {
    const isbn = this.registerForm.value.isbn;
    const author = this.registerForm.value.author;
    const title = this.registerForm.value.title;
    const description = this.registerForm.value.description;
    const book = new Book(isbn, author, title, description);
    const user = new User(this.username, '', '', '', '', '', false);
    const posting = new Posting(undefined, new Date(), user, book);
    if ((title === undefined) || (title === '') || (title === null)) {
      this.errorFlag = true;
      return;
    }
    this.postingService.create(posting).subscribe((posting: Posting) => {
        this.router.navigate(['/user/' + this.username + '/my-posting']);
      },
      (error: any) => {
        this.errorMessage = error._body;
        this.errorFlag = true;
      }
    );
  }

}
