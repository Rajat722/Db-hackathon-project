import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { FormattedMapResponse, GetDataService } from './get-data.service';
@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  capitals: string = '/assets/data/usa-capitals.geojson';
  constructor(private apiService: GetDataService){}
  makeMarkers(map: any, data:FormattedMapResponse[]): void {
      this.apiService.getGeographicalAlerts().subscribe(
      response => {
       response.forEach((c) => {

        const lon = +c.formattedCoordinate[1];
        const lat = +c.formattedCoordinate[0];
        const circle = L.marker([lat, lon]);
        circle.addTo(map);
      })
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );

  }
}
