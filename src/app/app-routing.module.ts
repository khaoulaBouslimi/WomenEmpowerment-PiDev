import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTrainingsessionComponent } from './create-trainingsession/create-trainingsession.component';
import { ListOfTrainingSessionsComponent } from './list-of-training-sessions/list-of-training-sessions.component';
import { QuestionComponent } from './question/question.component';
import { RainingSectionComponent } from './raining-section/raining-section.component';
import { TemplateComponent } from './template/template.component';
import { UpdateTrainingsessionComponent } from './update-trainingsession/update-trainingsession.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: "trainingSession" , component: ListOfTrainingSessionsComponent },
  {path: "create-ts" , component: CreateTrainingsessionComponent },
  {path: "update-ts" , component: UpdateTrainingsessionComponent},
  {path: "home" , component: TemplateComponent},
  {path: "ts" , component: RainingSectionComponent},

  {path: "welcome" , component: WelcomeComponent},
  {path: "Question" , component: QuestionComponent},

  { path: "", redirectTo: "welcome", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
