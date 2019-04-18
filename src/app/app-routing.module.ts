import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './profile/profile.component';
import {MyPostingNewComponent} from './myPosting/my-posting-new/my-posting-new.component';
import {MyPostingListComponent} from './myPosting/my-posting-list/my-posting-list.component';
import {MyPostingEditComponent} from './myPosting/my-posting-edit/my-posting-edit.component';
import {WishListComponent} from './wishList/wish-list/wish-list.component';
import {WishListNewComponent} from './wishList/wish-list-new/wish-list-new.component';
import {MyRequestListComponent} from "./myRequest/my-request-list/my-request-list.component";
import {AnonymousComponent} from "./anonymous/anonymous.component";
import {AdminEditPostComponent} from "./admin/admin-edit-post/admin-edit-post.component";
import {AdminRequestListComponent} from "./admin/admin-request-list/admin-request-list.component";

const routes: Routes = [
  {path: '', redirectTo: 'anonymous', pathMatch: 'full'},
  {path: 'anonymous', component: AnonymousComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user/:username', component: ProfileComponent},
  {path: 'user/:username/dashboard', component: DashboardComponent},
  {path: 'user/:username/my-posting', component: MyPostingListComponent},
  {path: 'user/:username/my-posting/new', component: MyPostingNewComponent},
  {path: 'user/:username/my-posting/:posting', component: MyPostingEditComponent},
  {path: 'user/:username/wish-list', component: WishListComponent},
  {path: 'user/:username/wish-list/new', component: WishListNewComponent},
  {path: 'user/:username/admin-posting/:posting', component: AdminEditPostComponent},
  {path: 'user/:username/admin-request', component: AdminRequestListComponent},
  {path: 'user/:username/my-request', component: MyRequestListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
