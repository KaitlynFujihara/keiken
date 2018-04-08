import { Component, OnInit } from '@angular/core';
import { MapboxService } from '../mapbox.service';
import { YelpService } from '../yelp.service'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers : [MapboxService, YelpService]
})
export class MapComponent implements OnInit {
  inputLocation;
  public lat;
  public lng;

  constructor(private router: Router, public mapboxService: MapboxService, public yelpService: YelpService){
  }
  public ngOnInit(){
    this.mapboxService.mapboxInit('mapbox');
    // this.mapboxService.searchNearby(this.inputLocation);
  }
  public getData(inputLocation:string): void{
    this.mapboxService.searchNearby(inputLocation);
   }
  public getMapPosition(name: string, imageUrl: string, review: string) {
    const businesses= this.yelpService.searchYelp(this.mapboxService.lat, this.mapboxService.lng);
    console.log(businesses)
  }
}
