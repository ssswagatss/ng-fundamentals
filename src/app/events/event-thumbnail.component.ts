import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'event-thumbnail.component.html'
})
export class EventThumbnailComponent {
    constructor() { }

    @Input() event : any;
    // @Output() eventClick=new EventEmitter();

    // handleClick() : void{
    //     this.eventClick.emit(this.event.name);
    // }

    someProperty : string = "Hello from child component";
    logDataOnChildComponent(){
        console.log("logDataOnChildComponent");
    }
}