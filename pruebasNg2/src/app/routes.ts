/**
 * Created by crist on 06/04/2017.
 */
/**
 * Created by crist on 22/03/2017.
 */
import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import {FechaComponent} from "./fecha/fecha.component";




export const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path:'fecha', component: FechaComponent},

];

export const RutasAppModule: ModuleWithProviders = RouterModule.forRoot(routes);
