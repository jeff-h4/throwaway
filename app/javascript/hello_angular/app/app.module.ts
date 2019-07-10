import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { JsonApiModule } from 'angular2-jsonapi';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CreatePostFormComponent } from '../create-post-form/create-post-form.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FindFriendFormComponent } from '../find-friend-form/find-friend-form.component';
import { FriendsListComponent } from '../friends-list/friends-list.component';
import { HomeComponent } from '../home/home.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { SignupFormComponent } from '../signup-form/signup-form.component';

import { httpInterceptorProviders } from '../http-interceptors/index';
import { Datastore } from '../_services/datastore.service';
import { AuthService } from '../_services/auth.service';
import { FriendshipService } from '../_services/friendship.service';
import { PostService } from '../_services/post.service';
import { UserService } from '../_services/user.service';

@NgModule({
  //Only declare declarables: Components, Pipes and Directives
  declarations: [
    AppComponent,
    CreatePostFormComponent,
    DashboardComponent,
    FindFriendFormComponent,
    FriendsListComponent,
    HomeComponent,
    LoginFormComponent,
    PageNotFoundComponent,
    SignupFormComponent
  ],
  //Import modules that this module relies upon
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    JsonApiModule,
    AppRoutingModule
  ],
  //Services that this module needs. Includes any @Injectables
  providers: [
    httpInterceptorProviders,
    Datastore,
    AuthService,
    FriendshipService,
    PostService,
    UserService
  ],
  //Insert any component listed into the DOM
  bootstrap: [AppComponent]
})
export class AppModule { }
