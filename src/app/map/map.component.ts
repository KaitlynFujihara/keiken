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
  providers : [MapboxService]
})
export class MapComponent implements OnInit {
  inputLocation;
  constructor(private router: Router, public mapboxService: MapboxService, public yelpService: YelpService){
  }
  public ngOnInit(){
    this.mapboxService.mapboxInit('mapbox');
    // this.mapboxService.searchNearby(this.inputLocation);
  }
  public getData(inputLocation:string): void{
    this.mapboxService.searchNearby(inputLocation);
    console.log(inputLocation)
   }
   public getYelp(location:{lng: string, lat:string}): void{
    this.yelpService.searchYelp({lng, lat});
   }
}
