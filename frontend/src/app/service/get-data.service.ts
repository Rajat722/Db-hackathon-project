import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private apiUrl = 'https://us-central1-hack-team-eletech.cloudfunctions.net/flask-api';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/api/data');
  }

  getAlerts(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/api/alerts');
  }
}
