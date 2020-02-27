import { Component, OnInit, AfterContentInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { UserDaoService } from '../services/user-dao.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';


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
  constructor(formBuilder: FormBuilder,public userDao: UserDaoService, public router: Router) {
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
          const firstName = this.formGroupSignUp.controls.firstName.value;
          const lastName = this.formGroupSignUp.controls.lastName.value;
          const userName = this.formGroupSignUp.controls.userName.value;
          const email = this.formGroupSignUp.controls.email.value;
          const dob: Date = this.formGroupSignUp.controls.dob.value;
          const password = this.formGroupSignUp.controls.password.value;
          console.log("details are getting saved")
          const user: User = new User(firstName, lastName, userName, email,password,dob);
          this.userDao.addOneUser(user).subscribe((data)=>
          {
            console.log("details saved");
            this.router.navigateByUrl('/login');
          },
          (err)=>{
            console.log("some error has occured, failed to save data");
          }
          );

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
