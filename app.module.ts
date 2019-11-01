import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { IndiaComponent } from './india/india.component';
import { BangladeshComponent } from './bangladesh/bangladesh.component';
@NgModule({
  declarations: [
    AppComponent,
    IndiaComponent,
    BangladeshComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }