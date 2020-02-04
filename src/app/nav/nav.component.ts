import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  isLoggedIn: boolean
  constructor(public authentication: AuthenticationService) {
   }

  ngOnInit() {
    this.isLoggedIn = this.authentication.isUserLoggedIn();
  }


}
