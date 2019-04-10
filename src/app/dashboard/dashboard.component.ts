import { Component, OnInit } from '@angular/core';
import { PostingService } from '../../service/post.service.client';
import {Posting} from '../../model/posting.model.client';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  postings: Posting[];
  flag = false;
  constructor(private postingService: PostingService,private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }
  username;

  setParams(params) {
    this.username = params['username'];

  }

  ngOnInit() {
    this.postingService.getAllPostings()
      .subscribe((postingsList) => {
        this.postings = postingsList;
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

  closeNav() {
    document.getElementById('mySidebar').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  }

}
