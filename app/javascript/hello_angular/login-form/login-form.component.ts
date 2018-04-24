import { Component } from '@angular/core';
import templateString from './login-form.component.html'
import { User } from '../_models/user';
import { LoginFormService } from "./login-form.service"

@Component({
  selector: 'app-login-form',
  template: templateString,
  providers: [LoginFormService]
})
export class LoginFormComponent {
  model = new User(10, 'Fred', 'Flintstone');
  submitted = false;

  constructor(private loginFormService: LoginFormService) {}

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
      .subscribe(user =>
        console.log("Component login callback"));
  }
  resetForm() {
    this.model = new User(1, '', '');
  }
}
