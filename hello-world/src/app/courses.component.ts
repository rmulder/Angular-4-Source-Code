
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',/** {{}} is callled as interpolation */
    template: `
                <button class="btn btn-primary">
                <span class="glyphicon glyphicon-search"></span>
                </button>
              ` 
})

export class CoursesComponent {
     isActive = true;
    title = 'List of Courses Saravana';
    onSave(){
        console.log("Click Worked");
    }
    onDivClick(){
        console.log("Div Click Worked");
    }
    rollNum = 20;
    onKeyUp() {
        console.log(this.rollNum);
    }
}


// Section 4 : Property Binding

// import { Component } from '@angular/core';
// ({
//     selector : 'courses',/** {{}} is callled as interpolation */
//     template : `
//                     <h2>{{ title }}</h2>
                    
//                 `
// })

// export class CoursesComponent {
//     title = "List of courses";
//     // imageUrl = "C://Users//Saravana Prasanth//Dropbox//Photo";
// }