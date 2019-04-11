import { Component, OnInit } from '@angular/core';
import {Posting} from '../../../model/posting.model.client';
import {PostingService} from "../../../service/post.service.client";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-my-posting-list',
  templateUrl: './my-posting-list.component.html',
  styleUrls: ['./my-posting-list.component.css']
})
export class MyPostingListComponent implements OnInit {

  postings: Posting[];
  username: string;
  constructor(private postingService: PostingService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  ngOnInit() {
    this.postingService.getPostingsById(this.username)
      .subscribe((postingsList) => {
        this.postings = postingsList;
      });
  }

  setParams(params) {
    this.username = params.username;

  }
}
