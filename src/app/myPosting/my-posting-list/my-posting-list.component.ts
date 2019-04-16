import { Component, OnInit } from '@angular/core';
import {Posting} from '../../../model/posting.model.client';
import {PostingService} from '../../../service/post.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-my-posting-list',
  templateUrl: './my-posting-list.component.html',
  styleUrls: ['./my-posting-list.component.css']
})
export class MyPostingListComponent implements OnInit {

  postings: Posting[];
  username: string;
  flag = false;
  constructor(private postingService: PostingService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
    this.route.params.subscribe(params => {
      this.postingService.getPostingsById(this.username)
        .subscribe((postingsList) => {
          this.postings = postingsList;
        });
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postingService.getPostingsById(this.username)
        .subscribe((postingsList) => {
          this.postings = postingsList;
        });
    });
  }

  setParams(params) {
    this.username = params.username;

  }
  fetchPostings() {
    return this.postings;
  }
  openNav() {
    if (!this.flag) {
      document.getElementById('mySidebar').style.width = '250px';
      document.getElementById('main').style.marginLeft = '250px';
      this.flag = true;
    } else {
      document.getElementById('mySidebar').style.width = '0';
      document.getElementById('main').style.marginLeft = '0';
      this.flag = false;
    }
  }
}
