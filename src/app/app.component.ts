import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
declare function animateBg() ;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  userLoggedIn: boolean
 constructor(public authentication: AuthenticationService)
 {
    this.userLoggedIn = this.authentication.isUserLoggedIn()
 }
  ngOnInit(): void {
    animateBg();
  }
  title = 'base-app';
}
