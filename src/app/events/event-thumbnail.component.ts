import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'event-thumbnail.component.html'
})
export class EventThumbnailComponent {
    constructor() { }

    @Input() event : any;
    @Output() eventClick=new EventEmitter();

    handleClick() : void{
        this.eventClick.emit("Hello World!!");
    }
}