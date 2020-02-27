import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { TypeScriptEmitter } from '@angular/compiler';
import { UserDaoService } from './user-dao.service';
import { async } from '@angular/core/testing';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService{
  USER_USER_NAME = 'userName';
  USER_AUTH_TOKEN = 'userToken'
  USERS_URL =  'http://localhost:8765/user-service/login';

  constructor(public router: Router,public userDao: UserDaoService,public http:HttpClient) { }

  login(userName: string, userPassword:string)
  {
      const basicKey ="Basic " + window.btoa(userName + ":" + userPassword);
      console.log(basicKey);
      let headers = new HttpHeaders({
        Authorization : basicKey
      });
      return this.http.get(this.USERS_URL, {headers}).pipe(
        // success function
        map(successData=>{
          console.log("IN AUTH: success ")
          localStorage.setItem(this.USER_USER_NAME, userName);
          // save the token
          localStorage.setItem(this.USER_AUTH_TOKEN, basicKey);
          return successData;
        }),
        map(failureData=>{
          console.log("IN AUTH : FAILURE")
          return failureData;
        })
      );
     }
  
  logout()
  {
    localStorage.removeItem(this.USER_AUTH_TOKEN);
    localStorage.removeItem(this.USER_USER_NAME)
    return true;
  }



  isUserLoggedIn()
  {
     if(localStorage.getItem(this.USER_AUTH_TOKEN)!==null)
     {
       return true;
     }
     else
     {
       return false;
     }
  }
}
