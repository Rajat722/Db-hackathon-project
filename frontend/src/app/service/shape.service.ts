import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MAP_OUTLINE } from '../map.constants';

@Injectable({
  providedIn: 'root'
})
export class ShapeService {
  constructor(private http: HttpClient) { }

  getStateShapes() {
    return MAP_OUTLINE;
  }
}
