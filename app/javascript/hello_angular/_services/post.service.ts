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

  addPost(title) : Observable<Post> {
    let post = this.datastore.createRecord(Post, {
      title: title
    })
    return post.save();
  }

  getPosts() : Observable<Post[]> {
    return this.datastore.findAll(Post, {})
      .pipe(
        map(queryData => queryData.getModels())
      );
  }
}