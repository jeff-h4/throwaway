import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  getAuthorizationToken() {
    return localStorage.getItem('auth_token');
  }

  setAuthorizationToken(token: string) {
    localStorage.setItem('auth_token', token);
  }
}