import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainingSessionService {

  private apiUrl = "http://localhost:8088"

  constructor(private httpClient : HttpClient) { }

  getALLTrainingSessions(){
    return this.httpClient.get(`${this.apiUrl}/GetAllTrainingSessions`)
  }


}
