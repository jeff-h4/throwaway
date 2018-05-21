import { Component } from '@angular/core';
import templateString from './friends-list.component.html';

import { User } from '../_models/user';

@Component({
  selector: 'app-friends-list',
  template: templateString,
  providers: [
  ]
})
export class FriendsListComponent {

  constructor(
  ) { }

}
