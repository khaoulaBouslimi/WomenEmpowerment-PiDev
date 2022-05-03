import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Questions } from './questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  private apiUrl = "http://localhost:8088"

  constructor(private httpClient : HttpClient) { }

  getALLQuestions(){
    return this.httpClient.get<any>("assets/question.json")
  }

  getALLQuestions2(){
    return this.httpClient.get<Questions>(`${this.apiUrl}/getAllQuestions`)
  }
}
