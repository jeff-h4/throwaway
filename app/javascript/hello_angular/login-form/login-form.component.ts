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
  model = new User(10, 'johndoe@mail.com', 'johndoe');
  submitted = false;

  constructor(private loginFormService: LoginFormService, private authService: AuthService) {}

  // TODO: From tutorial: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  onSubmit() {
    console.log("Form submitted");
    this.submitted = true;
    this.login();
  }

  login(): void {
    this.loginFormService.loginUser(this.model)
      .subscribe(resp => {
        console.log("Component login callback");
        this.authService.setAuthorizationToken(resp.auth_token);
      });
  }

  resetForm() {
    this.model = new User(1, '', '');
  }
}
