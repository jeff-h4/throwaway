import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from '../home/home.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { SignupFormComponent } from '../signup-form/signup-form.component';

import { httpInterceptorProviders } from '../http-interceptors/index';
import { AuthService } from '../_services/auth.service';
import { PostService } from '../_services/post.service';

@NgModule({
  //Only declare declarables: Components, Pipes and Directives
  declarations: [
    AppComponent,
    DashboardComponent,
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
    AppRoutingModule
  ],
  //Services that this module needs
  providers: [
    httpInterceptorProviders,
    AuthService,
    PostService
  ],
  //Insert any component listed into the DOM
  bootstrap: [AppComponent]
})
export class AppModule { }
