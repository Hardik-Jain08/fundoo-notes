import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpService : HttpService) { }
  access_token = localStorage.getItem('access_token');
  getAllNotes(endpoint: string){
    return this.httpService.getApiCall(`notes/${endpoint}?access_token=${this.access_token}`);
  }
}
