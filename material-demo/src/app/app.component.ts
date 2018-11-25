import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isChecked = true;
  colors = [
    {id : 1, name : 'Red'},
    {id : 2, name : 'Blue'},
    {id : 3, name : 'Pink'}
  ];

  color = 2;

  onChange(event) {
    console.log(event);
  }
}
