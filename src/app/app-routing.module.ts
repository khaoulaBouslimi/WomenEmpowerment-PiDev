import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { CommonModule } from '@angular/common';
import { NotfountComponent } from './notfount/notfount.component';
import { DisplayAllComponent } from './event/display-all/display-all.component';

const routes: Routes = [
  {path:'event',component:EventComponent},
  {path:'event/all',component:DisplayAllComponent},
  {path: '**',component: NotfountComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
