import { Component, OnInit, ViewChild } from '@angular/core';
import { UserDaoService } from '../services/user-dao.service';
import { FormControl } from '@angular/forms';
import { FollowList } from '../models/FollowList.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  imageUrl:any;
  visibleList: FollowList;
  imageFormControl: FormControl;
  constructor(private userDao: UserDaoService) { 
    this.imageFormControl = new FormControl();
    this.visibleList = new FollowList();
    this.imageUrl = '/assets/images/hero2.png';

  }

  ngOnInit() {
      // set initially to followers list
  }

  uploadPic(profilePic: HTMLInputElement)
  {
    profilePic.click()
    console.log("image is being added");
  }
  submit(event)
  {
    const file:File= event.target.files[0];
    const fileReader: FileReader = new FileReader();
    fileReader.onload = (event)=>
    {
      this.imageUrl = fileReader.result;
    }
    fileReader.readAsDataURL(file);
    console.log(file.type);
    this.userDao.uploadUserProfilePic(file).subscribe((success)=>
    {
      console.log(success);
      
    });
  }

}
