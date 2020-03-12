import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  isLoggedIn: boolean
  constructor(public authentication: AuthenticationService, private router: Router) {
   }

  ngOnInit() {
    this.isLoggedIn = this.authentication.isUserLoggedIn();
  }
  search(searchTerm: string)
  {
    var searchTerm  = searchTerm.trim();
    if(isValid(searchTerm))
    {
      console.log("search Clicked " + searchTerm);
      this.router.navigateByUrl("search/"+searchTerm);     
    }
   
  }

 
}
 function isValid(searchTerm: string)
{
  // not implemented yet
  return true;
}
