import { Injectable } from '@angular/core';

import { Datastore } from '../_services/datastore.service';
import { User } from '../_models/user';

@Injectable()
export class AuthService {
  constructor(
    private datastore: Datastore
  ) {};

  getAuthorizationToken() {
    return localStorage.getItem('auth_token');
  }

  setAuthorizationToken(token: string) {
    localStorage.setItem('auth_token', token);
  }

  loginUser(user: User) {
    localStorage.setItem('user_id', user.id);
    localStorage.setItem('first_name', user.first_name);
    localStorage.setItem('last_name', user.last_name);
    localStorage.setItem('email', user.email);
  }

  currentUser(): User {
    return this.datastore.createRecord(User, {
      id: localStorage.getItem('user_id'),
      first_name: localStorage.getItem('first_name'),
      last_name: localStorage.getItem('last_name'),
      email: localStorage.getItem('email')
    })
  }

  loggedIn(): boolean {
    return localStorage.getItem('auth_token') != null
  }
}