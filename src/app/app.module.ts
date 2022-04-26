import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { TrainingSessionListComponent } from './My-components/training-session-list/training-session-list.component';
import { ListOfTrainingSessionsComponent } from './list-of-training-sessions/list-of-training-sessions.component';
import { CreateTrainingsessionComponent } from './create-trainingsession/create-trainingsession.component';
import { UpdateTrainingsessionComponent } from './update-trainingsession/update-trainingsession.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    TrainingSessionListComponent,
    ListOfTrainingSessionsComponent,
    CreateTrainingsessionComponent,
    UpdateTrainingsessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
