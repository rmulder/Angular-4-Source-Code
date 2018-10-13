import { Component, OnInit } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent{
  contactMethods = [
    { id: 1, name:'Email'},
    { id: 2, name: 'Phone' }
  ];

  genders = [
    {id: 1,name:'Male'},
    { id: 2, name:'Female' }
  ];

  log(value){
    console.log(value);
  }
  
  submit(f){
    console.log(f);
  }

}
