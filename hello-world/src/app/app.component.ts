import { UserDetails } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // courses = [
  //   { id: 1, name: 'Saravana'},
  //   { id: 2, name: 'Prasanth'},
  //   { id: 3, name: 'Natarajan'}
  // ];

  styleChange = true;

  viewMode = 'map';

  coursesCount = [12,12];

  post = {
    title : 'Saravana',
    isFavourite : false
  }

  tweet = {
    isActive : 'true',
    likesCount : 10
  }

  title = {
    name: 'saravana',
    assingne: {name: 'sp'}
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


  courses;
  
  loadCourses(){
    this.courses = [
      { id: 1, name: 'Saravana' },
      { id: 2, name: 'Prasanth' },
      { id: 3, name: 'Natarajan' }
    ];
  }

  trackCourse(index, course){
    return course ? course.id : undefined;
  }
}
