import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { JsonApiQueryData } from 'angular2-jsonapi';

import { Datastore } from '../_services/datastore.service';
import { User } from '../_models/user';

@Injectable()
export class UserService {
  constructor(
    private datastore: Datastore
  ) {}

  findUsers(email) : Observable<User[]> {
    return this.datastore.findAll(User, {
      filter: {
        email: email
      }
    })
      .pipe(
        map(queryData => queryData.getModels()),
      )
  }
}