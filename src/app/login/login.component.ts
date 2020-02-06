import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { UserDaoService } from '../user-dao.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: String = ""
  USER_TOKEN = 'user';
  constructor(public userDao: UserDaoService,public router: Router) { }

  ngOnInit() {
  }
  login(form: FormGroup)
  {
    const userName = form.value.uname;
    const password = form.value.password;
    this.userDao.getOneUser(userName).subscribe((user:User)=>
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
    })
}

}
