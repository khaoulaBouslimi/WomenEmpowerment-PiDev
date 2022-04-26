import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrainingSession } from '../Mes-classes/training-session';

@Injectable({
  providedIn: 'root'
})
export class TrainingSessionService {

  private apiUrl = "http://localhost:8088"

  constructor(private httpClient : HttpClient) { }

  getALLTrainingSessions(){
    return this.httpClient.get(`${this.apiUrl}/GetAllTrainingSessions`)
  }

  createTrainingSession(trainingSession :TrainingSession): Observable<Object>{
    return this.httpClient.post(`${this.apiUrl}/addTheTrainingSession`, trainingSession)
  }

}
