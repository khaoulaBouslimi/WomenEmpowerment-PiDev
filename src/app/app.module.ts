import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { TrainingSessionListComponent } from './My-components/training-session-list/training-session-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    TrainingSessionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
