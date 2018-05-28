import { Component, OnInit } from '@angular/core';
import templateString from './friends-list.component.html';

import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-friends-list',
  template: templateString,
  providers: [
  ]
})
export class FriendsListComponent implements OnInit {
  currentUser: User;
  friends: User[];
  displayFriends: boolean;
  getFriendsError: boolean;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {
    this.currentUser = this.authService.currentUser();
  }

  ngOnInit(): void {
    this.displayFriends = false;
    this.getFriendsError = false;
    this.getFriends();
  }

  getFriends(): void {
    let params = {include: 'friends'}

    this.userService.getUser(this.currentUser.id, params).subscribe({
      next: user => {
        this.friends = user.friends.map(x => <User>x);
        this.displayFriends = true;
        this.getFriendsError = false;
      },
      error: err => {
        this.getFriendsError = true;
      }
    })
  }
}
