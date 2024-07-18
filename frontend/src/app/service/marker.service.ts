import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  capitals: string = '/assets/data/usa-capitals.geojson';
  constructor(private http: HttpClient) { }

  makeMarkers(map: any): void {
  var defaultLocation = [{
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-73.98247116666667, 40.76773883333333]
      },
      "properties": {
        "state": "New York",
        "name": "Deutsche Bank Center",
      }
    }]
      for (const c of defaultLocation) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const circle = L.marker([lat, lon]);
        circle.addTo(map);
      }
  }
}
