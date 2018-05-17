import { Component } from '@angular/core';
import templateString from './find-friend-form.component.html';

import { User } from '../_models/user';
import { Datastore } from '../_services/datastore.service'
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
  formInput: any;
  findFriendFail: boolean;
  submitted: boolean;
  showFriend: boolean;
  friend: User;

  constructor(
    private datastore: Datastore,
    private userService: UserService
  ) {
    this.formInput = {};
    this.findFriendFail = false;
    this.submitted = false;
    this.showFriend = false;
    this.friend = null;
  }

  onSubmit() {
    console.log("Form submitted");
    this.submitted = true;
    this.findFriend();
  }

  findFriend(): void {
    this.userService.findUsers(this.formInput.email)
      .subscribe({
        next: users => {
          this.friend = users[0];
          this.showFriend = true;
          this.findFriendFail = false;
        },
        error: err => {
          this.showFriend = false;
          this.findFriendFail = true;
        }
      });
  }
}
