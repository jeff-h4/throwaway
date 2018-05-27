import { Component } from '@angular/core';
import { Router }  from '@angular/router';
import templateString from './login-form.component.html';

import { User } from '../_models/user';
import { Datastore } from '../_services/datastore.service';
import { LoginFormService } from "./login-form.service";
import { AuthService } from "../_services/auth.service";

@Component({
  selector: 'app-login-form',
  template: templateString,
  providers: [
    Datastore,
    LoginFormService,
    AuthService
  ]
})
export class LoginFormComponent {
  model : User;
  submitted : boolean;
  loginFail : boolean;

  constructor(
    private router: Router,
    private datastore: Datastore,
    private loginFormService: LoginFormService,
    private authService: AuthService
  ) {
    this.model = this.datastore.createRecord(User, {
      email: "johndoe@mail.com",
      password: "johndoe"
    });
    this.submitted = false;
    this.loginFail = false;
  }

  onSubmit() {
    this.submitted = true;
    this.login();
  }

  login(): void {
    this.loginFormService.loginUser(this.model.email, this.model.password)
      .subscribe({
        next: resp => {
          this.authService.setAuthorizationToken(resp.auth_token);
          this.authService.loginUser(resp.user);
          this.loginFail = false;
          this.router.navigate(['/dashboard']);
        },
        error: err => {
          this.loginFail = true;
        }
      });
  }

  resetForm() {
    this.model = this.datastore.createRecord(User, {
      email: "",
      password: ""
    });
  }
}
