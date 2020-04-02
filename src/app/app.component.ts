import { Component } from '@angular/core';

@Component({
  selector: 'memberapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent {
  title="MVP Member";

  constructor () { }

  ngoninit() {
    this.title="MVP Member Updated Title";
  }
}

