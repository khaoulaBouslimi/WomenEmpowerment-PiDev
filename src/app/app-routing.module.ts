import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTrainingsessionComponent } from './create-trainingsession/create-trainingsession.component';
import { ListOfTrainingSessionsComponent } from './list-of-training-sessions/list-of-training-sessions.component';
import { TemplateComponent } from './template/template.component';
import { UpdateTrainingsessionComponent } from './update-trainingsession/update-trainingsession.component';

const routes: Routes = [
  {path: "trainingSession" , component: ListOfTrainingSessionsComponent },
  {path: "create-ts" , component: CreateTrainingsessionComponent },
  {path: "update-ts" , component: UpdateTrainingsessionComponent},
  {path: "home" , component: TemplateComponent},

  { path: "", redirectTo: "home", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
