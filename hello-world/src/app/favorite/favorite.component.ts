import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('is-favourite') isFavourite : boolean;
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    let value = {'username':'saravana','password':'prasanth'};
    this.isFavourite = !this.isFavourite;
    this.change.emit(value);
  }
  
}
export interface UserDetails {
  username : string;
  password : string;

}