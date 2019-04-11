import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './profile/profile.component';
import {MyPostingNewComponent} from './myPosting/my-posting-new/my-posting-new.component';
import {MyPostingListComponent} from './myPosting/my-posting-list/my-posting-list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user/:username', component: ProfileComponent},
  {path: 'user/:username/dashboard', component: DashboardComponent},
  {path: 'user/:username/my-posting', component: MyPostingListComponent},
  {path: 'user/:username/my-posting/new', component: MyPostingNewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
