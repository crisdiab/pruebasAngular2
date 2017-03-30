import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ToasterModule, ToasterService} from 'angular2-toaster';

import { AppComponent } from './app.component';
import { ToasterComponent } from './toaster/toaster.component';


@NgModule({
  declarations: [
    AppComponent,
    ToasterComponent
  ],
  imports: [
    ToasterModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
