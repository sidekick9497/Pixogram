import { Component, OnInit, AfterContentInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, AfterContentInit {
  formGroupSignUp: FormGroup ;
  password: string;
  // formBuilder is a service which is an example of dependency injection
  // angular will automatically create the  object of that service class and inject
  // it into constructor of element.
  constructor(formBuilder: FormBuilder) {
    this.password = ""
    this.formGroupSignUp = formBuilder.group({
        firstName: new FormControl("",Validators.compose([this.nameCheck])),
        lastName: new FormControl("",Validators.compose([this.nameCheck])),
        userName: new FormControl("",Validators.compose([this.isUserNameAvailable])),
        email: new FormControl("",Validators.compose([this.emailCheck])),
        dob: new FormControl("",Validators.compose([this.dateCheck])),
        confirmPassword: new FormControl(""),
        password: new FormControl("",Validators.compose([this.passwordCheck]))

    });
   }

   saveDetails() {
      if(this.formGroupSignUp.valid)
      {
          //save the details.
          console.log("details are getting saved")
      }
      else{
        console.log("details are invalid");
      }
   }

   nameCheck(txtControl: FormControl) {
        const isValid =/^[a-zA-Z]{3,}$/.test(txtControl.value);
        if(!isValid)
        {
          return {
            error:true
          }
        }

   }
   isUserNameAvailable(txtControl: FormControl){
    const isValid = /^[a-zA-Z0-9]{3,8}$/.test(txtControl.value);
    const isAvailable = true; //currently placeholder variable
    if(!isValid)
    {
      return{
        notValid: true
      }
    }
   if(!isAvailable)
   {  return
      {
        notAvailable: true
      }
    }
  }
   emailCheck(txtControl: FormControl)
   {
     const isValid = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(txtControl.value)
     const isAvailable  = true; //currently placeholder variable
      if(!isValid)
      {
        return{
            isValid
          }
      }
   }
   dateCheck()
   {
     return{

     }
   }
   passwordCheck(txtControl: FormControl)
   {
     const isValid = /^(?=.*\d).{4,15}$/.test(txtControl.value)
     if(!isValid)
     {
     return {
      invalid: true
     }

    }
   }
   matchPassword():ValidatorFn
   {

       return (control: AbstractControl):{[key:string]:boolean} =>
        {
           if(this.formGroupSignUp.controls.password.value !== control.value)
            return {
                invalid:true
            }
            return
            {}
        }

    }

   ngOnInit()
   {


   }
   ngAfterContentInit()
   {
    this.formGroupSignUp.controls.confirmPassword.setValidators(Validators.compose([this.matchPassword()]))
   }
  }
