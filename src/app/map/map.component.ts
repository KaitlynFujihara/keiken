import { Component, OnInit } from '@angular/core';
import { MapboxService } from '../mapbox.service';
import { YelpService } from '../yelp.service'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Favorite } from '../models/favorite.model';
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
  public businesses;

  constructor(private router: Router, public mapboxService: MapboxService, public yelpService: YelpService){
  }
  public ngOnInit(){
    this.mapboxService.mapboxInit('mapbox');
    // this.mapboxService.searchNearby(this.inputLocation);
  }
  public getData(inputLocation:string): void{
    this.mapboxService.searchNearby(inputLocation);
   }
  public getMapPosition() {
    this.yelpService.searchYelp(this.mapboxService.lat, this.mapboxService.lng).then((data) => {
      this.businesses = data.businesses;
    });
  }

  public favorite(name: string, image_url: string, rating: string, price: string) {
    var newFavorite: Favorite = new Favorite(name, image_url, rating, price);
    console.log(newFavorite);
  }
}
