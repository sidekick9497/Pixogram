import { Component, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: String = ""
  constructor(public authetication: AuthenticationService,public router: Router) { }

  ngOnInit() {
  }
  login(form: FormGroup)
  {
    if(this.authetication.logIn(form.value.uname,form.value.password))
    {
      this.router.navigateByUrl('/gallery');
    }
    else{
        this.errorMessage = "invalid credentials"
    }
  }
}
