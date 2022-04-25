import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTrainingsessionComponent } from './create-trainingsession/create-trainingsession.component';
import { ListOfTrainingSessionsComponent } from './list-of-training-sessions/list-of-training-sessions.component';

const routes: Routes = [
  {path: "trainingSession" , component: ListOfTrainingSessionsComponent },
  {path: "create-ts" , component: CreateTrainingsessionComponent },

  { path: "", redirectTo: "trainingSession", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
