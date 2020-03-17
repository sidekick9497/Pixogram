import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{


  constructor(private authentication: AuthenticationService) { }
  intercept(request:HttpRequest<any>,next:HttpHandler)
  {
    console.log("intercept Activated");
    if(this.authentication.getAuthenticationToken())
    {
     
      let authenticationToken = this.authentication.getAuthenticationToken();
      let userId = this.authentication.getUserId();
      console.log(userId);
      request = request.clone({
        setHeaders:{
          Authorization:authenticationToken,
          "userId":userId
        }
      })
      return next.handle(request);
    }
  }
}
