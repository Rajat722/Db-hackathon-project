import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../../service/marker.service';
import { ShapeService } from '../../service/shape.service';
import { MAP_OUTLINE } from '../../map.constants';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements AfterViewInit {

  private map:any;
  private boundary:any;
  private initMap(): void {
    this.map = L.map('map').setView([40.76773883333333, -73.98247116666667], 18);
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  private initStatesLayer() {
    const boundaryLayer = L.geoJSON(this.boundary, {
      style: (feature) => ({
        weight: 3,
        opacity: 0.5,
        color: '#008f68',
        fillOpacity: 0.8,
        fillColor: '#6DB65B'
      })
    });

    this.map.addLayer(boundaryLayer);
  }
  constructor(private markerService: MarkerService, private shapeService:ShapeService) { }
  ngAfterViewInit(): void {
    this.initMap();
    this.boundary = MAP_OUTLINE;

    this.initStatesLayer();
    this.markerService.makeMarkers(this.map);
  }
}
