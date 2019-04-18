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
    WishListNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, PostingService, WishListService, HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
