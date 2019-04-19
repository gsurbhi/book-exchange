import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import {UserService} from '../service/user.service.client';
import {HttpModule} from '@angular/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import {PostingService} from '../service/post.service.client';
import { MyPostingNewComponent } from './myPosting/my-posting-new/my-posting-new.component';
import { MyPostingListComponent } from './myPosting/my-posting-list/my-posting-list.component';
import { MyPostingEditComponent } from './myPosting/my-posting-edit/my-posting-edit.component';
import { WishListComponent } from './wishList/wish-list/wish-list.component';
import { WishListNewComponent } from './wishList/wish-list-new/wish-list-new.component';
import {WishListService} from '../service/wishlist.service.client';
import { MyRequestListComponent } from './myRequest/my-request-list/my-request-list.component';
import {RequestService} from "../service/request.service.client";
import {CommonModule} from "@angular/common";
import { AnonymousComponent } from './anonymous/anonymous.component';
import { AdminEditPostComponent } from './admin/admin-edit-post/admin-edit-post.component';
import { AdminRequestListComponent } from './admin/admin-request-list/admin-request-list.component';
import { AdminUserListComponent } from './admin/admin-user-list/admin-user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    MyPostingNewComponent,
    MyPostingListComponent,
    MyPostingEditComponent,
    WishListComponent,
    WishListNewComponent,
    MyRequestListComponent,
    AnonymousComponent,
    AdminEditPostComponent,
    AdminRequestListComponent,
    AdminUserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    CommonModule

  ],
  providers: [UserService, PostingService, RequestService, WishListService, HttpModule],
  bootstrap: [AppComponent]
})
export  class AppModule { }
