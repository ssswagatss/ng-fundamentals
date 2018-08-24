import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'event-thumbnail.component.html',
    styles:[
        `
        .well div { color:#bbb}
        `
    ]
})
export class EventThumbnailComponent {
    constructor() { }
    @Input() event : any;
    
}