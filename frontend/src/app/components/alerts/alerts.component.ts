import { Component } from '@angular/core';
import { GetDataService } from '../../service/get-data.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent {
  data:any;
  constructor(private apiService:GetDataService){

}
ngOnInit():void {
    this.apiService.getAlerts().subscribe(
      response => {
        this.data = response;
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
