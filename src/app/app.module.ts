import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventsAppComponent } from './events-app.component';


@NgModule({
  imports: [ // Importing other modulers
    BrowserModule
  ],
  declarations: [//Componet, pipe and directive
    EventsAppComponent
  ],
  providers: [], //Services
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
