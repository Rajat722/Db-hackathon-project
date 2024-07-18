import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { response } from 'express';
import dayjs from 'dayjs';
export interface ApiResponse {
  alert: number,
  eletech_id: number,
  individual: string,
  location: string,
  out_of_area:number,
  timestamp: string,
  type:string,
}
export interface FormattedMapResponse{
  formattedCoordinate: Array<string>
}
export interface FormattedResponse{
   alert: number,
  eletech_id: number,
  individual: string,
  location: string,
  out_of_area:number,
  timestamp: string,
  type:string,
  formattedDateField: string,
}
@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private apiUrl = 'https://us-central1-hack-team-eletech.cloudfunctions.net/flask-api';
  constructor(private http: HttpClient) {}

  getData(): Observable<FormattedResponse[]> {
    return this.http.get<any>(this.apiUrl + '/api/data').pipe(
      map((responses:ApiResponse[])=>{
        return responses.map(response => ({
          ...response,
          formattedDateField: dayjs(response.timestamp).format('DD/MM/YYYY'),
        }));
      })
    );
  }

  getAlerts(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/api/alerts').pipe(
      map((responses:ApiResponse[])=>{
        return responses.map(response => ({
          ...response,
          formattedDateField: dayjs(response.timestamp).format('DD/MM/YYYY'),
        }));
      })
    );
  }

  getGeographicalAlerts():Observable<any>{
    return this.http.get<any>(this.apiUrl + '/api/alerts-locations').pipe(
      map((responses:ApiResponse[])=>{
        return responses.map(response => ({
          formattedCoordinate: response.location.split(",",2),
        }));
      })
    );
  }
}
