import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpEvent,HttpRequest   } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Event } from 'src/app/Model/Event';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  url=environment.hostUrl;
  event:Event =new Event();
  tab:any=[];
  public curEvent= new BehaviorSubject(this.event);
  public curEvent1= new BehaviorSubject([this.event]);
  sharedEvent = this.curEvent.asObservable();
  sharedEvent1 = this.curEvent1.asObservable();
  constructor(private http:HttpClient) {
   }

  addEvent(data:Event){
     return this.http.post(this.url+'Events/add',data,{responseType: 'text'}).pipe(map((res) =>{
      this.tab=res;
      this.curEvent.next(this.tab);
    }));
  }

  getAllEvents(): Observable<Event[]>{
    return this.http.get<Event[]>(this.url+'Events/all');
  }
  

  deleteEvent(id:Number){
    return this.http.delete(this.url+'Events/'+id,{responseType: 'text'});
  }

  updateEvent(id:number,data:Event){
    return this.http.put(this.url+'Events/'+id,{responseType: 'text'});
  }
  getEventById(id:Number): Observable<Event>{
    return this.http.get<Event>(this.url+'Events/'+id);
  }
}
