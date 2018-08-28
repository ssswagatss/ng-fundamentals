import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'event-thumbnail.component.html',
    styles:[
        `
        .green {color : #003300 !important;}
        .bold {font-weight : bold;}
        .thumbnail {min-height : 210px;}
        .well div { color:#bbb}
        `
    ]
})
export class EventThumbnailComponent {
    constructor() { }
    @Input() event : any;
    

    getEventTimeClass(){
        const isEarly : boolean = this.event && this.event.time=='8:00 am';
        if(isEarly)
        {
            // return "green bold";
            // return {green : isEarly , bold:isEarly};
            return ["green","bold"]

        }
        return "";
    }
}