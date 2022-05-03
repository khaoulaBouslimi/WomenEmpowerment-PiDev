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
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RainingSectionComponent } from './raining-section/raining-section.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { ChangeBgDirective } from './change-bg.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    TrainingSessionListComponent,
    ListOfTrainingSessionsComponent,
    CreateTrainingsessionComponent,
    UpdateTrainingsessionComponent,
    FooterComponent,
    HeaderComponent,
    RainingSectionComponent,
    WelcomeComponent,
    QuestionComponent,
    ChangeBgDirective
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
