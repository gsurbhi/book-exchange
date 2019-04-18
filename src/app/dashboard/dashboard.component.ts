import {Component, OnInit} from '@angular/core';
import {PostingService} from '../../service/post.service.client';
import {Posting} from '../../model/posting.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Request} from '../../model/request.model.client';
import {RequestService} from "../../service/request.service.client";
import {User} from "../../model/user.model.client";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  postings: Posting[];
  username;
  requests: Request[];
  flag = false;
  errorFlag = false;
  errorMessage: string;
  alreadyRequestPIds:number[];


  constructor(private postingService: PostingService, private route: ActivatedRoute,
              private requestService: RequestService, private router: Router) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  setParams(params) {
    this.username = params['username'];
    this.requests = [];
    this.alreadyRequestPIds= [];
    this.loadRequests(this.username);

  }

  loadRequests(username) {
    this.username = username;
    this.requestService.findRequestsForUser(username)
      .then(requests => this.requests = requests)
      .then((requests)=>{
        requests.forEach(element => {
          this.alreadyRequestPIds.push(
            element.pId);
          console.log(this.alreadyRequestPIds);
        });
      });
  }


requestPost(newPost){
    const user = new User(this.username, '', '', '', '', '', false);
    const newRequest = new Request(new Date(),user,newPost);
    this.requestService.create(newRequest).subscribe((request: Request) => {
        this.router.navigate(['/user/' + this.username + '/my-request']);
      },
      (error: any) => {
        this.errorMessage = error._body;
        this.errorFlag = true;
      }
    );
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
}
