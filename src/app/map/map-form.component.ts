import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MapboxService } from '../mapbox.service';

@Component({
  selector: 'map-form',
  templateUrl: './map.component.html',
  styleUrls: [ './map.component.css' ],
  providers: [ MapboxService ]
})

export class MapFormComponent {
  constructor(private mapboxService: MapboxService) { }
  getRoverImages(date: string, camera: string) {
    this.marsRoverPhotos.getByDateAndCamera(date, camera).subscribe(response => {
        this.photos = response.json();
    });
  }
}
public inputForm(location: string): Observable<any>{
  this.mapboxService.searchNearby(location).subscribe(response => {
     this.response = response.json();
 });
}
