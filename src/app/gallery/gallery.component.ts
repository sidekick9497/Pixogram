import { Component, OnInit } from '@angular/core';
import { MediaDaoService } from '../services/mediaService/media-dao.service';
import { MediaList } from '../models/mediaList.model';
import { MatDialog } from '@angular/material';
import { UploadMediaComponent } from '../upload-media/upload-media.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  constructor(private dialog:MatDialog ,private mediaDao:MediaDaoService ) { }
  mediaList: MediaList = new MediaList();
 
  ngOnInit() {
      console.log("init in media component")
      this.mediaDao.getAllMediaByUserId().subscribe((data:MediaList)=>
      {
        console.log(data.medialist);
        this.mediaList = data;
      })

  }
  openAddMediaDialog()
  {
    let dialogRef = this.dialog.open(UploadMediaComponent,{
      height:'600px',
      width:'600px'
    })

  }

}
