import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { UserDaoService } from '../services/user-dao.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: String = ""
  USER_TOKEN = 'user';
  constructor(public userAuth:AuthenticationService,public router: Router) { }

  ngOnInit() {
  }
  login(username,Ipassword)
  {
    console.log("logging in ");
    //const userName = username;
    const userName = "harry123";
   // const password = Ipassword;
    const password = "hari123";
   /* this.userDao.getOneUser(userName).subscribe((user:User)=>
    {
      if(user.id == userName && user.password == password)
      {
        localStorage.setItem(this.USER_TOKEN,userName);
        this.router.navigateByUrl('/gallery');
        console.log("logged in");
      }
      else{
        console.log("invalid");
        form.reset();
        this.errorMessage = "Invalid userName or password";
      }

    },(err)=>
    {   console.log("invalid");
      form.value.password = "";
      form.reset();
      this.errorMessage = "Invalid userName or password";
    })*/
    this.userAuth.login(userName, password).subscribe(
      // success function
      successData=>{
        console.log("IN LOGIN : SUCCESS...");
        console.log(successData);
        this.router.navigateByUrl('/gallery');
      },
      // failure function
     
    );
}

}
