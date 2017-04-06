import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ToasterComponent } from './toaster/toaster.component';
import { SortByAttributePipe } from 'ng2bln-sort-by-attribute-pipe'
import {ToasterModule} from "angular2-toaster";
import {RutasAppModule} from "./routes";
import { FechaComponent } from './fecha/fecha.component';


@NgModule({
  declarations: [
    AppComponent,
    ToasterComponent,
    SortByAttributePipe,
    FechaComponent,
  ],
  imports: [
    ToasterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RutasAppModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
