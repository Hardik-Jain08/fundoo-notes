import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService : HttpService) { }

  signUp(data: any){
    return this.httpService.postApiCall('user/signup', data);
  }
  login(data: any){
    return this.httpService.postApiCall('user/login', data);
  }
}
