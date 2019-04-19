import {Component, OnInit} from '@angular/core';
import {PostingService} from '../../service/post.service.client';
import {Posting} from '../../model/posting.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Request} from '../../model/request.model.client';
import {RequestService} from "../../service/request.service.client";
import {User} from "../../model/user.model.client";
import {UserService} from "../../service/user.service.client";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  postings: Posting[];
  username;
  password;
  requests: Request[];
  flag = false;
  errorFlag = false;
  errorMessage: string;
  alreadyRequestPIds:number[];
  loggedUser: User;
  firstName;
  lastName;
  emailId;
  cellNumber;
  isAdmin: boolean;


  constructor(private postingService: PostingService, private route: ActivatedRoute,
              private requestService: RequestService, private router: Router,
              private userService: UserService) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  setParams(params) {
    this.username = params['username'];
    this.requests = [];
    this.alreadyRequestPIds= [];
    this.loadRequests(this.username);
    this.loadProfile(this.username);
    this.loadAllPostings();

  }

  loadRequests(username) {
    this.requestService.findAllRequests()
      .then(requests => this.requests = requests)
      .then((requests)=>{
        requests.forEach(element => {
          this.alreadyRequestPIds.push(
            element.pId);
          console.log(this.alreadyRequestPIds);
        });
      });
  }

  loadProfile(username){
    this.userService
      .profile(this.username)
      .subscribe(user => {
          this.loggedUser = user.JSON;
          this.isAdmin = user.admin;
          //console.log("user in ",this.isAdmin);
        }
      );

  }

  loadAllPostings(){
    this.postingService.getAllPostings()
      .subscribe((postingsList) => {
        this.postings = postingsList;
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

  // admin panel functions

  adminDeletePost(pId){
    this.postingService.deletePosting(pId).subscribe(() => {
      this.loadAllPostings();
    },
      (error: any) => {
        this.errorMessage = error._body;
        this.errorFlag = true;
      });
  }





}
