import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { JsonApiQueryData } from 'angular2-jsonapi';

import { Datastore } from '../_services/datastore.service';
import { Friendship } from '../_models/friendship';
import { User } from '../_models/user';

@Injectable()
export class FriendshipService {
  friendship: Friendship;

  constructor(
    private datastore: Datastore
  ) {}

  addFriendship(friendId) : Observable<Friendship> {
    let friend = this.datastore.createRecord(User, {
      id: friendId
    })
    this.friendship = this.datastore.createRecord(Friendship, {
      friend: friend
    });
    return this.friendship.save();
  }
}