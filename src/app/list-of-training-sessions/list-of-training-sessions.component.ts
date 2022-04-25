import { Component, OnInit } from '@angular/core';
import { TrainingSession } from '../Mes-classes/training-session';
import { TrainingSessionService } from '../Service/training-session.service';

@Component({
  selector: 'app-list-of-training-sessions',
  templateUrl: './list-of-training-sessions.component.html',
  styleUrls: ['./list-of-training-sessions.component.css']
})
export class ListOfTrainingSessionsComponent implements OnInit {


  listOfTrainingSessions : any;
  form: boolean;
  t : TrainingSession;
  closeResult : string;


  constructor(private tsService : TrainingSessionService) { }

  ngOnInit(): void {

    this.getTrainingSessions();
    this.t = {
      idTS : null,
      title : null,
      dateDebut:null,
      dateFin: null,
      dure : null,
      localisation: null,
      DescriptionOfTS: null
    
    }

  }

  private getTrainingSessions(){
    this.tsService.getALLTrainingSessions().subscribe(data => this.listOfTrainingSessions = data
    )
  }

}
