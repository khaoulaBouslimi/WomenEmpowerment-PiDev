import { Component, OnInit } from '@angular/core';
import { QuestionServiceService } from '../question-service.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public name: string="";
  public questionList : any = [];
  public currentQuestion: number = 0;
  public points : number = 0;
  counter = 60;


  constructor(private qService : QuestionServiceService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name");
    this.getQuestionsFromService();
  }

  getQuestionsFromService(){
    this.qService.getALLQuestions()
    .subscribe(res => {
      this.questionList = res.questions ;
    })
  }

  previousQuestion(){
    this.currentQuestion--;
  }
  nextQuestion(){
    this.currentQuestion++;
  }

  
}
