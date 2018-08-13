import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpreadZoneComponent } from './components/spread-zone/spread-zone.component';

@NgModule({
  declarations: [
    AppComponent,
    SpreadZoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
