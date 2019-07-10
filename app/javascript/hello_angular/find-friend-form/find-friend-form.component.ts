import { Component } from '@angular/core';
import templateString from './find-friend-form.component.html';

import { User } from '../_models/user';
import { Datastore } from '../_services/datastore.service'
import { FriendshipService } from "../_services/friendship.service";
import { UserService } from "../_services/user.service";

@Component({
  selector: 'app-find-friend-form',
  template: templateString,
  providers: [
    Datastore,
    UserService
  ]
})
export class FindFriendFormComponent {
  addFriendError: boolean;
  addFriendSuccess: boolean;
  formInput: any;
  findFriendError: boolean;
  submitted: boolean;
  findFriendSuccess: boolean;
  friend: User;

  constructor(
    private datastore: Datastore,
    private friendshipService: FriendshipService,
    private userService: UserService
  ) {
    this.addFriendError = false;
    this.addFriendSuccess = false;
    this.findFriendError = false;
    this.findFriendSuccess = false;
    this.formInput = {};
    this.submitted = false;
    this.friend = null;
  }

  onSubmit() {
    console.log("Form submitted");
    this.submitted = true;
    this.resetFindFriendDisplay();
    this.findFriend();
    this.resetAddFriendDisplay();
  }

  addFriend(): void {
    console.log("addFriend()");
    if (this.friend == null) {
      return;
    };
    this.friendshipService.addFriendship(this.friend.id)
      .subscribe({
        next: result => {
          this.addFriendError = false;
          this.addFriendSuccess = true;
        },
        error: err => {
          this.addFriendError = true;
          this.addFriendSuccess = false;
        }
      });
  }

  findFriend(): void {
    let filterParams = {email: this.formInput.email};
    this.userService.findUsers(filterParams)
      .subscribe({
        next: users => {
          this.friend = users[0];
          this.findFriendSuccess = true;
          this.findFriendError = false;
        },
        error: err => {
          this.findFriendSuccess = false;
          this.findFriendError = true;
        }
      });
  }

  resetAddFriendDisplay(): void {
    this.addFriendSuccess = false;
    this.addFriendError = false;
  }

  resetFindFriendDisplay(): void {
    this.findFriendSuccess = false;
    this.findFriendError = false;
  }
}
