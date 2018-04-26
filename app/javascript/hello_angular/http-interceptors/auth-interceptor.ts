import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { AuthService } from '../_services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.auth.getAuthorizationToken();
    console.log("Intercepted the auth token ", authToken);
    const authReq = req.clone({ setHeaders: { Authorization: authToken } });
    return next.handle(authReq);
  }
}
