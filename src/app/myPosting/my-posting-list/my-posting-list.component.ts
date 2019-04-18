import { Component, OnInit } from '@angular/core';
import {Posting} from '../../../model/posting.model.client';
import {PostingService} from '../../../service/post.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-my-posting-list',
  templateUrl: './my-posting-list.component.html',
  styleUrls: ['./my-posting-list.component.css']
})
export class MyPostingListComponent implements OnInit {

  postings: Posting[];
  username: string;
  flag = false;
  constructor(private postingService: PostingService, private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  ngOnInit() {
    
  }

  setParams(params) {
    this.username = params.username;
    this.loadPostings(this.username);
  }

  loadPostings(username){
    this.postingService.getPostingsById(this.username)
      .subscribe((postingsList) => {
        this.postings = postingsList;
      });
  }

  deletePost(pId) {
    this.postingService.deletePosting(pId)
      .subscribe(() => {
        this.loadPostings(this.username);
      });
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
