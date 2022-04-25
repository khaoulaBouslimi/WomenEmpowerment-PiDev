import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfTrainingSessionsComponent } from './list-of-training-sessions/list-of-training-sessions.component';

const routes: Routes = [
  {path: "trainingSession" , component: ListOfTrainingSessionsComponent },

  { path: "", redirectTo: "trainingSession", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
