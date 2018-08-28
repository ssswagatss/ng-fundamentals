import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'event-thumbnail.component.html',
    styles:[
        `
        .thumbnail {min-height : 210px;}
        .well div { color:#bbb}
        `
    ]
})
export class EventThumbnailComponent {
    constructor() { }
    @Input() event : any;
    
}