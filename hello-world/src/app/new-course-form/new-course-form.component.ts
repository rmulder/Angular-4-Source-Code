import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  form = new FormGroup({
      name : new FormControl(),
      contacts: new FormGroup({
        email: new FormControl(),
        mobile: new FormControl()
      }),
      topics : new FormArray([])
  });

  constructor(fb : FormBuilder){

    this.form = fb.group({
      name: ['',Validators.required],
      age : fb.control('',Validators.required),
      contacts : fb.group({
        email : [],
        mobile : []
      }),
      topics : fb.array([])
    });

  }


  addTopics(topic : HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopics(topic: FormControl){
    let index = this.topics.controls.indexOf(topic.value);
    this.topics.removeAt(index);
  }
  get topics(){
    return <FormArray>this.form.get('topics');
  }
}
