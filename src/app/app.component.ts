import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
declare function animateBg() ;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges{
  userLoggedIn: boolean
 constructor(public authentication: AuthenticationService)
 {
    this.userLoggedIn = this.authentication.isUserLoggedIn()
 }
  ngOnInit(): void {
    animateBg();
  }
  ngOnChanges():void{
    animateBg();
    this.userLoggedIn = this.authentication.isUserLoggedIn();
  }

  title = 'base-app';
}
