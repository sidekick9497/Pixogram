import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { TypeScriptEmitter } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService{

  USERS_URL =  'http://localhost:3000/users';
  constructor(public router: Router,public httpClient: HttpClient) { }

  logIn(userName: string, password: string)
  {
    /*if(userName ==='harry' && password ==="abcd")
    {
      localStorage.setItem('user','harry');
      return true;
    }
    else{
      return false;
    }*/
    return this.httpClient.get(this.USERS_URL+"/"+userName).subscribe((user:User) =>
    {
        if(user.id == userName && user.password == password)
        {
          return true;
        }
        else
        {
          return false;
        }
    })
  }
  logout()
  {
    localStorage.removeItem('user');
    return true;
  }



  isUserLoggedIn()
  {
      if(localStorage.getItem('user')!== null)
      {
        return true;
      }
      return false;
  }
}
