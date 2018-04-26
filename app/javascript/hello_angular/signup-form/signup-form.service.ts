import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { User } from '../_models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class SignupFormService {
  targetUrl = 'users';  // URL to web api

  constructor(private http: HttpClient) {}

  signupUser (user: User): Observable<any> {
    console.log("signupUser()");
    return this.http.post<User>(this.targetUrl, user, httpOptions)
  }
}
