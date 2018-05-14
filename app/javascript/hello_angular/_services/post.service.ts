import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { JsonApiQueryData } from 'angular2-jsonapi';

import { Datastore } from '../_services/datastore.service';
import { Post } from '../_models/post';

@Injectable()
export class PostService {
  constructor(
    private datastore: Datastore
  ) {}

  getPosts() : Observable<Post[]> {
    return this.datastore.findAll(Post, {})
      .pipe(
        map(queryData => queryData.getModels())
      );
  }
}