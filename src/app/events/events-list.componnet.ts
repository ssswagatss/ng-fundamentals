import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
    selector: 'events-list',
    template:`
    <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <event-thumbnail *ngFor="let event of events" [event]="event" (click)="handlesEventClick(event?.name)" class="col-md-6"></event-thumbnail>
    <div>
  ` ,
})
export class EventsListComponent implements OnInit {
  events:any[];  
  constructor(private eventService:EventService, private toast:ToastrService) {
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.events=this.eventService.getEvents();    
  }
  handlesEventClick(name : string){
    this.toast.success(name);
  }
}
