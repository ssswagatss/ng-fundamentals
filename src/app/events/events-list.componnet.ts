import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template:`
    <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <event-thumbnail [event]="event" (eventClick)="handleEventOnParent($event)"></event-thumbnail>
    <div>
  ` ,
})
export class EventsListComponent {
    constructor() { }
    event = {
            id:1,
            name:'Angular Connect',
            date:'9/26/2019',
            time:'10:00 am',
            price:499.99,
            imageUrl:"/assets/images/angularconnect-shield.png",
            location:{
                address:'1057 DT',
                city:'London',
                country:'England'
        }
    }
    handleEventOnParent($event){
        console.log($event);
    }
}
