import { UserDetails } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = [
    { id: 1, name: 'Saravana'},
    { id: 2, name: 'Prasanth'},
    { id: 3, name: 'Natarajan'}
  ];

  viewMode = 'map';

  coursesCount = [];

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


  onTabClick(viewMode){
      this.viewMode  = viewMode;
  }

  onAddButton(){
    this.courses.push({id:4 ,name:'Mallika'});
  }

  onRemoveButton(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onUpdateButton(course){
    course.name = 'UPDATED ONE';
  }


}
