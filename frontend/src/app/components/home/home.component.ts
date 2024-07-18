import { Component } from '@angular/core';
import { GetDataService } from '../../service/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
data: any;
constructor(private apiService:GetDataService){

}
ngOnInit(): void {
  console.log("works")
    this.apiService.getData().subscribe(
      response => {
        this.data = response;
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }
}


