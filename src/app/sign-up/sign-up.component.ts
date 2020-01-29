import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent  {
  formGroupSignUp: FormGroup ;
  // formBuilder is a service which is an example of dependency injection
  // angular will automatically create the  object of that service class and inject
  // it into constructor of element.
  constructor(formBuilder: FormBuilder) {
    this.formGroupSignUp = formBuilder.group({
        name: new FormControl()

    });
   }

   saveDetails()
   {
     return;
   }
}
