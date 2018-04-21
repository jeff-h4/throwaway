import { Component } from '@angular/core';
import templateString from './login-form.component.html'
import { User } from '../_models/user';

@Component({
  selector: 'app-login-form',
  template: templateString
})
export class LoginFormComponent {
  model = new User(10, 'Fred', 'Flintstone');
  submitted = false;

  // TODO: From tutorial: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  onSubmit() {
    console.log("Form submitted");
    this.submitted = true;
  }

  resetForm() {
    this.model = new User(1, '', '');
  }
}
