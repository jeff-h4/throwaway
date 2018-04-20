import { Component } from '@angular/core';
import templateString from './app.component.html'

  //template: `<h1>Hello {{name}}</h1>`
@Component({
  selector: 'hello-angular',
  template: templateString
})
export class AppComponent {
  name = 'Angular!';
}
