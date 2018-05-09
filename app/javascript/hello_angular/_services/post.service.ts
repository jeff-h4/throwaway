import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Post, PostArray } from '../_interfaces/post.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
}

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts() : Observable<any> {
    const targetUrl = 'posts';
    return this.http.get(targetUrl, httpOptions);
  }
}