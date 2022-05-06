import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { Event } from '../Model/Event';
import { ToastrService } from 'ngx-toastr';
import { EventServiceService } from '../core/service/event-service.service';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  myForm: FormGroup;
  event:Event;
  submitted = false;

  constructor(private router:Router,private toastr: ToastrService,private eventService:EventServiceService) { }

  ngOnInit(): void {
    this.event=new Event();
    this.myForm= new FormGroup({
      'eventTopic':new FormControl('',Validators.required),
      'date':new FormControl('',Validators.required),
      'description':new FormControl('',Validators.required)

    })
  }
  addEvent(){
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
     }
     this.eventService.addEvent(this.event).subscribe((res)=>{
      this.toastr.success('Event added successfuly','Added event !');
      this.router.navigate(["/event/all"]);
     }),()=>this.toastr.error("Error !","Added event");
     console.log(this.event)
  }
}
