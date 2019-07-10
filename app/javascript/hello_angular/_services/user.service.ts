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

  getUser(id, fieldParams): Observable<User> {
    return this.datastore.findRecord(User, id, fieldParams)
  }

  findUsers(filterParams): Observable<User[]> {
    let params = {filter: filterParams};
    return this.datastore.findAll(User, params)
      .pipe(
        map(queryData => queryData.getModels()),
      )
  }
}