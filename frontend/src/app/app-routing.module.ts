import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LocationComponent } from './components/location/location.component';
import { AlertsComponent } from './components/alerts/alerts.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'alerts', component:AlertsComponent},
  {path:'map', component:LocationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
