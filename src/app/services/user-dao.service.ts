import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDaoService {
  USER_URL = "http://localhost:8765/user-service/users/signup";
  constructor(public httpClient: HttpClient) { }

  getOneUser(userId: string)
  {
      return this.httpClient.get(this.USER_URL+"/"+ userId)



  }
  addOneUser(user: User)
  {
     return this.httpClient.post(this.USER_URL,user)


}
}
