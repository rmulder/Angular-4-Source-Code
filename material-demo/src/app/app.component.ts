import { EditCourseComponent } from './edit-course/edit-course.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  progress = 0;
  timer;

  isLoading = false;
  constructor(private dialog: MatDialog) {
    this.timer = setInterval(() => {
      this.progress++;
      if (this.progress === 100) {
        clearInterval(this.timer);
      }
    }, 20);
    this.isLoading = true;
    this.getCourses()
    .subscribe(x => this.isLoading = false);
  }
  title = 'app';
  isChecked = true;
  colors = [
    {id : 1, name : 'Red'},
    {id : 2, name : 'Blue'},
    {id : 3, name : 'Pink'}
  ];

  color = 2;

  minDate = new Date(2018, 1, 11);
  maxDate = new Date(2018, 30, 11);

  categories = [
    {name : 'Beginner'},
    {name : 'Advanced'},
    {name : 'Intermediate'}
  ];

  onChange(event) {
    console.log(event);
  }

  selectCategory(category) {
    this.categories.
       filter(c => c !== category)
      .forEach(c => c['selected'] = false);
    category.selected = !category.selected;
  }

  getCourses() {
    return Observable.timer(2000);
  }

  openDialog() {
    this.dialog.open(EditCourseComponent, {
      data : { courseId : 1 }
    })
    .afterClosed().subscribe(result => console.log(result));
  }
}
