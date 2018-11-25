import { Component } from '@angular/core';
// import { AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';
// import { AngularFireObject, AngularFireList } from 'angularfire2/database';
// import { Observable } from 'rxjs';
// import { Subscription } from "rxjs";
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$;
  courseList: AngularFireList<any>;
 
 constructor(private db: AngularFireDatabase) {
   this.courseList = db.list('/course');
   console.log(this.courseList);
  //  this.courses$ = this.courseList.snapshotChanges();
    this.courses$ = this.courseList.snapshotChanges().pipe(
      map(changes => changes.map(
        change => ({
          key: change.payload.key,
          value: change.payload.val()
      })))
    );
 }
 
 add(course: HTMLInputElement) {
   this.courseList.push({
     name: course.value,
     price : 150,
     isLive : true
   });
   course.value = '';
 }

 update(course) {
   this.db.object('/course/' + course.key)
    .set({
      title: 'Update New Title',
      data : 500
    });
 }

 delete(course) {
   this.db.object('/course/' + course.key).remove()
    .then(response => {
      console.log('DELETED Successfully..!');
    })
 }
}
