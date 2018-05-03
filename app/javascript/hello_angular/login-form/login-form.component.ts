import { Component } from '@angular/core';
import templateString from './login-form.component.html';

import { User } from '../_models/user';
import { LoginFormService } from "./login-form.service";
import { AuthService } from "../_services/auth.service";

@Component({
  selector: 'app-login-form',
  template: templateString,
  providers: [LoginFormService, AuthService]
})
export class LoginFormComponent {
  model = new User(-1, '', '',  'johndoe@mail.com', 'johndoe');
  submitted = false;
  loginFail = false;

  constructor(private loginFormService: LoginFormService, private authService: AuthService) {}

  onSubmit() {
    this.submitted = true;
    this.login();
  }

  login(): void {
    this.loginFormService.loginUser(this.model.email, this.model.password)
      .subscribe({
        next: resp => {
          this.authService.setAuthorizationToken(resp.auth_token);
          this.loginFail = false;
        },
        error: err => {
          this.loginFail = true;
        }
      });
  }

  resetForm() {
    this.model = new User(-11, '','', '', '');
  }
}
