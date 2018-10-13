import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usernamevalidators } from './username.validators';
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

   /*  form = new FormGroup({
      'username': new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Usernamevalidators.cannotContainSpace,
        Usernamevalidators.customMinLength,
        Usernamevalidators.shouldBeUnique]),
      'password': new FormControl('', Validators.required)
  }); */

    // form = new FormGroup({
    //   'username': new FormControl('', [
    //     Validators.required], Usernamevalidators.shouldBeUnique),
    //   'password': new FormControl('', Validators.required)
    // });

    form = new FormGroup({
        account : new FormGroup({
          'username' : new FormControl('',Validators.required),
          'password' : new FormControl('',Validators.required)
        })
    });

  login(){
    this.form.setErrors({
      inValidLogin: true
    });
  }

    get username(){
      return this.form.get('account.username');
    }
}
