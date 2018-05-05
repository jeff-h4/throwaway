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

  constructor(private http: HttpClient) {}

  signupUser (user: User): Observable<any> {
    const targetUrl = 'users';
    return this.http.post<User>(targetUrl, user, httpOptions)
  }
}
