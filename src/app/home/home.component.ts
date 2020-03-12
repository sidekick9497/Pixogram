import { Component, OnInit } from '@angular/core';
import * as Parallax from 'parallax-js';
import { MatDialog } from '@angular/material';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { UploadMediaComponent } from '../upload-media/upload-media.component';
declare var Parallax: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hideLogin:boolean
  constructor(private matDialog:MatDialog) {
    this.hideLogin = true;
   }
   toggleHideLogin()
   {
     this.hideLogin = !this.hideLogin
   }
  ngOnInit() {
  }
  
  openSignUp()
  {
    console.log("signup clicked");
    let matDialogRef = this.matDialog.open(SignUpComponent,{
      height:'600px',
      width:'600px',
    })

  }
  

}
