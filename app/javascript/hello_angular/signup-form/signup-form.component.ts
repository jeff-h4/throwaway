import { Component } from '@angular/core';
import templateString from './signup-form.component.html';

import { User } from '../_models/user';
import { SignupFormService } from "./signup-form.service";
import { AuthService } from "../_services/auth.service";

@Component({
  selector: 'app-signup-form',
  template: templateString,
  providers: [SignupFormService, AuthService]
})
export class SignupFormComponent {
  model = new User(-1, 'Jane', 'Doe', 'janedoe@mail.com', 'janedoe');
  submitted = false;

  constructor(private signupFormService: SignupFormService, private authService: AuthService) {}

  onSubmit() {
    console.log("Form submitted");
    this.submitted = true;
    this.signup();
  }

  signup(): void {
    this.signupFormService.signupUser(this.model)
      .subscribe(resp => {
        console.log("Component login callback");
        this.authService.setAuthorizationToken(resp.auth_token);
      });
  }

  resetForm() {
    this.model = new User(-1, '', '', '', '');
  }
}
