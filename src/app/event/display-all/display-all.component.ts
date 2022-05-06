import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventServiceService } from 'src/app/core/service/event-service.service';
import { Event } from 'src/app/Model/Event';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.css']
})
export class DisplayAllComponent implements OnInit {
  events:Event[]
  event:Event
  event1:Event
  blob:Blob;
  p: number = 1;
  index:number=1;
  searchTerm: string;
  term: string;
  myForm: FormGroup;
  id:number;

  submitted = false;
  constructor(private router:Router,private eventService:EventServiceService,private toastr: ToastrService,private modalService: NgbModal) { }

  ngOnInit(): void {

    this.getAllEvents();
    this.event=new Event();
    this.myForm= new FormGroup({
      'eventTopic':new FormControl(this.event.eventTopic,Validators.required),
      'date':new FormControl(this.event.date,Validators.required),
      'description':new FormControl(this.event.description,Validators.required)

    })
  }

  getAllEvents(){
    this.eventService.getAllEvents().subscribe((res)=>{
      
      this.events=res;
    
      
    })
  }

  deleteEvent(id:Number){
    if(confirm("Are you sure  ")) {
      this.eventService.deleteEvent(id).subscribe((res)=>{
        this.getAllEvents();
        this.toastr.success('Event deleted !','Delete Event');
      }),()=>this.toastr.error('Error !','Delete Event');
    }
    
  }
  updateEvent(id:number){
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
     }
     console.log(id)
     this.eventService.updateEvent(id,this.myForm.value).subscribe((Event)=>{
        console.log(this.myForm.value)
      this.getAllEvents();
      this.toastr.success("Update effected successfuly","Update Event");
     }),()=>()=>this.toastr.error('Error !','Update Event');
  }
  editEvent(id:number,content:any){
    this.getEventById(id);
    this.id=id;
    this.open(content);

  }

  getEventById(id:number){
    this.eventService.getEventById(id).subscribe((Event)=>{
      this.event=Event;
    })
  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res:any) => {
     // this.closeResult = `Closed with: ${result}`;
    }, (reason:any) => {
      this.getAllEvents()
    });
  }
}

