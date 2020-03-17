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
  USER_ID_TOKEN = 'userId';
  USERS_URL =  'http://localhost:8765/user-service/login';

  constructor(public router: Router,public userDao: UserDaoService,public http:HttpClient) { }

  login(userName: string, userPassword:string)
  {
    
      const basicKey ="Basic " + window.btoa(userName + ":" + userPassword);
      console.log(basicKey);
      let headers = new HttpHeaders({
        Authorization : basicKey,
        "userName":userName
      });
      return this.http.get(this.USERS_URL, {headers}).pipe(
        // success function
        map(successData=>{
          console.log("IN AUTH: success " + successData)
          localStorage.setItem(this.USER_USER_NAME, userName);
          localStorage.setItem(this.USER_ID_TOKEN,successData.toString())
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
    localStorage.removeItem(this.USER_USER_NAME);
    localStorage.removeItem(this.USER_ID_TOKEN);
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
  getAuthenticationToken()
  {
    if(this.isUserLoggedIn())
    {
      return localStorage.getItem(this.USER_AUTH_TOKEN);

    }
    return null;
  }
  getUserId():string
  {
     
      return localStorage.getItem(this.USER_ID_TOKEN);
  
  }
}
