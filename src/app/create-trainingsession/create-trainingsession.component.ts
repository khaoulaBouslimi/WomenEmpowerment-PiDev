import { Component, OnInit } from '@angular/core';
import { TrainingSession } from '../Mes-classes/training-session';
import { TrainingSessionService } from '../Service/training-session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-trainingsession',
  templateUrl: './create-trainingsession.component.html',
  styleUrls: ['./create-trainingsession.component.css']
})
export class CreateTrainingsessionComponent implements OnInit {


  ts : TrainingSession = new TrainingSession();

  constructor(private tsService : TrainingSessionService,
    private router: Router) { }

  ngOnInit(): void {
  }


  saveTs(){
    this.tsService.createTrainingSession(this.ts).subscribe(data => {
      console.log(data);
      this.goToTsList();
    },
    error => console.log(error));
  }

  /* to navigate to list of ts after creating one */
  goToTsList(){
    this.router.navigate(['/trainingSession']);
  }

  onSubmit(){
    console.log(this.ts);
    this.saveTs();
  }

}
