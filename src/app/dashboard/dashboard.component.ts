import { Component, OnInit } from '@angular/core';
import { PostingService } from '../../service/post.service.client';
import {Posting} from '../../model/posting.model.client';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  postings: Posting[];
  constructor(private postingService: PostingService) { }

  ngOnInit() {
    this.postingService.getAllPostings()
      .subscribe((postingsList) => {
        this.postings = postingsList;
      });
  }

}
