import { Component, OnInit } from '@angular/core';
import { MediaDaoService } from '../services/mediaService/media-dao.service';
import { MediaList } from '../models/mediaList.model';
import { MatDialog } from '@angular/material';
import { UploadMediaComponent } from '../upload-media/upload-media.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { Media } from '../models/media.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  constructor(private dialog:MatDialog ,private mediaDao:MediaDaoService ) { }
  mediaList: MediaList = new MediaList();
  changedMediaList:Array<number> = [];
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
  like(mediaId:string)
  {
      console.log(mediaId);
      this.mediaDao.likeMedia(mediaId).subscribe((data)=>
      {
        this.mediaList.medialist.find((media:Media)=>
        {
          if(media.id == mediaId ){
            if(media.disliked)
            {
              media.dislikedCount -=1;
              media.likedCount +=1;
              media.disliked = false;
              media.liked = true;
            }
            else if(media.liked)
            {
              media.likedCount -=1;
              media.liked = false;
            }
            else{
              media.likedCount += 1;
              media.liked = true;
              media.disliked = false;
            }
              
          }
        })
      })
  }
  dislike(mediaId:string)
  {
    console.log(mediaId);
    this.mediaDao.dislikeMedia(mediaId).subscribe((data)=>
    {
      this.mediaList.medialist.find((media:Media)=>
      {
        if(media.id == mediaId ){
          if(media.liked)
          {
            media.likedCount -=1;
            media.dislikedCount +=1;
            media.liked = false;
            media.disliked = true;
          }
          else if(media.disliked)
          {
            media.dislikedCount -=1;
            media.disliked = false;
            
          }
          else{
            media.dislikedCount += 1;
            media.disliked = true;
            media.liked = false;
          }
            
        }
      })
    })
  }

}
