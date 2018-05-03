import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class LoginFormService {

  constructor(private http: HttpClient) {}

  loginUser (email: string, password: string): Observable<any> {
    const targetUrl = 'authenticate';
    const body = {
      email: email,
      password: password
    }
    return this.http.post(targetUrl, body, httpOptions);
  }
}
