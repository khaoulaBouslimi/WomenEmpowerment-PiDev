import { Component, OnInit } from '@angular/core';
import { TrainingSession } from '../Mes-classes/training-session';

@Component({
  selector: 'app-create-trainingsession',
  templateUrl: './create-trainingsession.component.html',
  styleUrls: ['./create-trainingsession.component.css']
})
export class CreateTrainingsessionComponent implements OnInit {


  ts : TrainingSession = new TrainingSession();

  constructor() { }

  ngOnInit(): void {
  }

}
