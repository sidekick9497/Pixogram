import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { User } from '../models/user.model';
import {environment} from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserDaoService {
  USER_URL = "http://localhost:8765/user-service/users/signup";
  USER_URL_PIC_UPLOAD = 'http://localhost:8765/user-service/'
  USER_FOLLOWERS_URL = "http://localhost:8765/plum"
  constructor(public httpClient: HttpClient) { }

  getOneUser(userId: string)
  {
      const GET_ONE_USER_URL = environment.USER_MICRO_SERVICE +"/getOneUser"
      return this.httpClient.get(GET_ONE_USER_URL+"/"+ userId)
  }
  addOneUser(user: User)
  {
    const ADD_ONE_USER_URL = environment.USER_MICRO_SERVICE+"/users/signup";
     return this.httpClient.post(this.USER_URL,user)
  }

  uploadUserProfilePic(file:File)
  {
      const USER_PROFILE_PIC_UPLOAD_URL = "http://localhost:8765/user-service/users/profile/updateProfilePic"

      const formData: FormData = new FormData();
      formData.append('file',file);
      const request = new HttpRequest('PUT',USER_PROFILE_PIC_UPLOAD_URL,formData,{
        reportProgress:true,
        responseType:'text'
      })
      return this.httpClient.request(request);
  }
     
}
