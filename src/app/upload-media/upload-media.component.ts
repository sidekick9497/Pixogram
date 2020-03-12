import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MediaDaoService } from '../services/mediaService/media-dao.service';


@Component({
  selector: 'app-upload-media',
  templateUrl: './upload-media.component.html',
  styleUrls: ['./upload-media.component.css']
})
export class UploadMediaComponent implements OnInit {
  
  file: File;
  postDisabled: boolean;
  imgUrl:string = '/assets/images/hero2.png';


  constructor(
    // to make this as a dialog
    public dialogRef:MatDialogRef<UploadMediaComponent>,
    public mediaDao:MediaDaoService,)
     { 
    this.postDisabled = true;
  }

  ngOnInit() {
  }

  openUpload(mediaInput: HTMLInputElement)
  {
    mediaInput.click();
  }
  uploadMedia(event)
  {
    this.file = event.target.files[0];
    console.log(this.file);
    if(this.file !== null || this.file != undefined)
    {
      this.postDisabled= false;
    }
  }
  postMedia(title:HTMLInputElement,description:HTMLInputElement,tags:HTMLInputElement)
  { 
    const titleText = title.value.trim();
    const descriptionText = description.value.trim();
    const tagsText = tags.value.trim();
    console.log(titleText +" " +descriptionText + " " + tagsText);
    let filetype:string;
    if(this.file.type == 'image/jpeg')
    {
      filetype = '.jpeg';
    }
    if(this.file.type == 'image/png')
    {
      filetype = '.png';
    }
    else
    {
      filetype = "invalid";
    }
    this.mediaDao.uploadMedia(this.file,titleText,descriptionText,tagsText,filetype).subscribe((data)=>
    {
      console.log(data);
      this.dialogRef.close();
    },
    err=>
    {
      console.log(err);
    })
    console.log("sending the image to the server");  
    // post this.file to the server

  }
}
