import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { TypeScriptEmitter } from '@angular/compiler';
import { UserDaoService } from '../user-dao.service';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService{
  USER_TOKEN = 'user';
  USERS_URL =  'http://localhost:3000/users';
  constructor(public router: Router,public userDao: UserDaoService) { }

  logout()
  {
    localStorage.removeItem(this.USER_TOKEN);
    return true;
  }



  isUserLoggedIn()
  {
      if(localStorage.getItem(this.USER_TOKEN)!== null)
      {
        return true;
      }
      return false;
  }
}
