import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RequestService} from "../../../service/request.service.client";
import {Request} from "../../../model/request.model.client";

@Component({
  selector: 'app-admin-request-list',
  templateUrl: './admin-request-list.component.html',
  styleUrls: ['./admin-request-list.component.css']
})
export class AdminRequestListComponent implements OnInit {

  flag = false;
  username: string;
  requests: Request[];

  constructor(private route: ActivatedRoute,private requestService: RequestService,
              private router: Router) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  setParams(params) {
    this.username = params.username;
    this.loadRequests();
  }

  loadRequests() {
    this.requestService.findAllRequests()
      .then(requests => this.requests = requests);
  }

  adminDeleteRequest(pId){
    this.requestService.deleteRequest(pId)
      .subscribe(() => {
        this.loadRequests();
      });
  }

  ngOnInit() {
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
