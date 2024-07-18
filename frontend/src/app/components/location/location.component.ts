import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../../service/marker.service';
import { ShapeService } from '../../service/shape.service';
import { MAP_OUTLINE } from '../../map.constants';
import { FormattedMapResponse, GetDataService } from '../../service/get-data.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent  {

  private map:any;
  private boundary:any;
  data:FormattedMapResponse;
  isContentLoaded:boolean = false;



  constructor(private markerService: MarkerService, private shapeService:ShapeService,private apiService:GetDataService) {

  }

  ngOnInit():void{
    this.fetchDetails();
  }
  fetchDetails():void{
    this.apiService.getGeographicalAlerts().subscribe(
      response => {
        this.assignDetails(response)
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }
  assignDetails(res:any):void{

    this.data = res
    this.isContentLoaded = true;
    console.log(res)
  }


}
