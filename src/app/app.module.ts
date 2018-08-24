import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.componnet';
import { EventThumbnailComponent } from './events/event-thumbnail.component';


@NgModule({
  imports: [ // Importing other modulers
    BrowserModule
  ],
  declarations: [//Componet, pipe and directive
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent
  ],
  providers: [], //Services
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
