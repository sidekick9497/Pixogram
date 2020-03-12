import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';
import {environment} from './../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MediaDaoService {
  MEDIA_SERVICE_URL = environment.MEDIA_PLUMBING_URL ;
  //MEDIA_POST_URL = environment.MEDIA_PLUMBING_URL+'/media/saveMediaAndDetails';
  MEDIA_POST_URL = 'http://localhost:8765/media-plumbing/media-fiegn/media/saveMediaAndDetails';
  constructor(private httpClient:HttpClient,private userAuth:AuthenticationService) {
   }
   uploadMedia(file:File,title:string,description:string,tags:string,type:string)
   {
      const formData:FormData  = new FormData();
      formData.append('mediaFile',file);
      formData.append('title',title);
      formData.append('description',description);
      formData.append('imageType',type);
      formData.append('tags',tags);
      formData.append('userId',this.userAuth.getUserId());
       const request = new HttpRequest('POST',this.MEDIA_POST_URL,formData,{
         reportProgress:true,
         responseType:'text'
       });
        return this.httpClient.request(request);
            }
   getOneMediaById(mediaId:number)
   {
      return this.httpClient.get(this.MEDIA_SERVICE_URL+"/"+mediaId)
   }
   getAllMediaByUserId()
   {

     const ALL_MEDIA_URL = this.MEDIA_SERVICE_URL+"/media";
     console.log(ALL_MEDIA_URL);
     return this.httpClient.get(ALL_MEDIA_URL);
   }

}
