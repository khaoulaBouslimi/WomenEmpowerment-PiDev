import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { TrainingSessionListComponent } from './My-components/training-session-list/training-session-list.component';
import { ListOfTrainingSessionsComponent } from './list-of-training-sessions/list-of-training-sessions.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    TrainingSessionListComponent,
    ListOfTrainingSessionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
