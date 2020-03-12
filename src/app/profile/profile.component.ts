import { Component, OnInit, ViewChild } from '@angular/core';
import { UserDaoService } from '../services/user-dao.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  imageFormControl: FormControl;
  constructor(private userDao: UserDaoService) { 
    this.imageFormControl = new FormControl();
  }

  ngOnInit() {
  }
  uploadPic(profilePic: HTMLInputElement)
  {
    profilePic.click()
    console.log("image is being added");
  }
  submit(event)
  {
    const file:File= event.target.files[0];
    console.log(file.type);
    this.userDao.uploadUserProfilePic(file).subscribe((success)=>
    {
      console.log(success);
      
    });
  }

}
