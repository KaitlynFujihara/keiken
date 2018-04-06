import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MapboxService } from '../mapbox.service';

@Component({
  selector: 'app-map-form',
  templateUrl: './map.component.html',
  styleUrls: ['./map-form.component.css'],
  providers: [ MapboxService ]
})

export class MapFormComponent {
  data;
  constructor(public mapboxService: MapboxService) { }
  getInputData(location: string) {
    this.mapboxService.searchNearby(location);
    console.log(location)
  }
}
