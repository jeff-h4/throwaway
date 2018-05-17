import { Component } from '@angular/core';
import templateString from './signup-form.component.html';

import { User } from '../_models/user';
import { Datastore } from '../_services/datastore.service'
import { SignupFormService } from "./signup-form.service";
import { AuthService } from "../_services/auth.service";

@Component({
  selector: 'app-signup-form',
  template: templateString,
  providers: [
    AuthService,
    Datastore,
    SignupFormService
  ]
})
export class SignupFormComponent {
  model : User;
  signupFail : boolean;
  submitted : boolean;

  constructor(
    private authService: AuthService,
    private datastore: Datastore,
    private signupFormService: SignupFormService
  ) {
    this.model = datastore.createRecord(User, {
      first_name: "Jane",
      last_name: "Doe",
      email: "janedoe@mail.com",
      password: "janedoe"
    });
    this.signupFail = false;
    this.submitted = false;
  }

  onSubmit() {
    console.log("Form submitted");
    this.submitted = true;
    this.signup();
  }

  signup(): void {
    this.signupFormService.signupUser(this.model)
      .subscribe({
        next: resp => {
          this.authService.setAuthorizationToken(resp.auth_token);
          this.signupFail = false;
        },
        error: err => {
          this.signupFail = true;
        }
      });
  }

  resetForm() {
    this.model = this.datastore.createRecord(User, {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    })
  }
}
