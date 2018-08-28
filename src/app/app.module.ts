import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.componnet';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/event.service';
import { ToastrService } from './common/toastr.service';


@NgModule({
  imports: [ // Importing other modulers
    BrowserModule
  ],
  declarations: [//Componet, pipe and directive
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  providers: [EventService,ToastrService], //Services
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
