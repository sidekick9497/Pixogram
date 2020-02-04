import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public authentication: AuthenticationService,public router: Router) {
    this.logout();
   }

  logout()
  {
      this.authentication.logout();
      setTimeout(() => {
        this.router.navigateByUrl("/login");
      }, 1600);


  }
  ngOnInit()
  {}
}
