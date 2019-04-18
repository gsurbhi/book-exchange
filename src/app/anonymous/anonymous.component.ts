import { Component, OnInit } from '@angular/core';
import {Posting} from "../../model/posting.model.client";
import {ActivatedRoute, Router} from "@angular/router";
import {PostingService} from "../../service/post.service.client";

@Component({
  selector: 'app-anonymous',
  templateUrl: './anonymous.component.html',
  styleUrls: ['./anonymous.component.css']
})
export class AnonymousComponent implements OnInit {

  postings: Posting[];

  constructor(private router: Router,
              private postingService: PostingService,private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  setParams(params) {
    this.loadPostings();

  }

  loadPostings(){
    this.postingService.getAllPostings()
      .subscribe((postingsList) => {
        this.postings = postingsList;
      });

  }

  ngOnInit() {
  }

}
