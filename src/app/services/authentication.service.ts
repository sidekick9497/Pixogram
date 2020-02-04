import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService{

  constructor(public router: Router) { }

  logIn(userName: string, password: string)
  {
    if(userName ==='harry' && password ==="abcd")
    {
      localStorage.setItem('user','harry');
      return true;
    }
    else{
      return false;
    }
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
