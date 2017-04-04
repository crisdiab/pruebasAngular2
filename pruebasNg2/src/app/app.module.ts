import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ToasterComponent } from './toaster/toaster.component';
import { SortByAttributePipe } from 'ng2bln-sort-by-attribute-pipe'
import {ToasterModule} from "angular2-toaster";


@NgModule({
  declarations: [
    AppComponent,
    ToasterComponent,
    SortByAttributePipe,
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
