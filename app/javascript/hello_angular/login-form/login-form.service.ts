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
export class LoginFormService {
  targetUrl = 'authenticate';  // URL to web api

  constructor(private http: HttpClient) {}

  loginUser (user: User): Observable<User> {
    return this.http.post<User>(this.targetUrl, user, httpOptions)
  }

}
