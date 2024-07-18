import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GetDataService } from './service/get-data.service';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LocationComponent } from './components/location/location.component';
import { MarkerService } from './service/marker.service';
import { ShapeService } from './service/shape.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { DataAlertPipe } from './pipes/data-alert.pipe';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocationComponent,
    SidebarComponent,
    AlertsComponent,
    DataAlertPipe,
    MapComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
],
exports:[],
  providers: [
    GetDataService,
    MarkerService,
    ShapeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
