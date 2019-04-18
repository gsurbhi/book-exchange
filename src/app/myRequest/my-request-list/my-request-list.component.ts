import { Component, OnInit } from '@angular/core';
import {Request} from '../../../model/request.model.client';
import {RequestService} from '../../../service/request.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-my-request-list',
  templateUrl: './my-request-list.component.html',
  styleUrls: ['./my-request-list.component.css']
})
export class MyRequestListComponent implements OnInit {

  requests: Request[];
  username: string;

  constructor(private route: ActivatedRoute,private requestService: RequestService,
              private router: Router) {
    this.route.params.subscribe(
      params => this.setParams(params));

  }

  setParams(params) {
    this.username = params.username;
    this.loadRequests(this.username);
  }

  loadRequests(username) {
    this.username = username;
    this.requestService.findRequestsForUser(username)
      .then(requests => this.requests = requests);
  }

  deleteRequest(pId){
    this.requestService.deleteRequest(pId)
      .subscribe(() => {
        this.router.navigate(['user', this.username, 'my-request']);
      });
  }

  ngOnInit() {
  }

  fetchRequests(){
    return this.requests;
  }


  flag = false;

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


