import { UserDetails } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title : 'Saravana',
    isFavourite : false
  }

  tweet = {
    isActive : 'true',
    likesCount : 10
  }

  onChangeFavourite(eventArgs : UserDetails){
    let userName: string = eventArgs.username;
    let password: string = eventArgs.password;
    if(userName.endsWith('na')) {
      console.log("Username" +"***" +  userName);
    } else {
      console.log(userName + "****" + password);
    }
  }
}
