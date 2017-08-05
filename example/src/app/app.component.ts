import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string = 'app works!';
  outer: boolean;
  inner: boolean;
  spinner: boolean;
}
