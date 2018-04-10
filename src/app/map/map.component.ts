import { Component, OnInit } from '@angular/core';
import { MapboxService } from '../mapbox.service';
import { YelpService } from '../yelp.service'
import { DatabaseService } from '../database.service'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Favorite } from '../models/favorite.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers : [MapboxService, YelpService, DatabaseService]
})
export class MapComponent implements OnInit {
  listFavorites: any[];
  public favorites: FirebaseListObservable<any[]>;
  inputLocation;
  public lat;
  public lng;
  public businesses;
  public name;
  public rating;
  public price;

  constructor(private router: Router, public mapboxService: MapboxService, public yelpService: YelpService, public databaseService: DatabaseService){
  }
  public ngOnInit(){
    this.mapboxService.mapboxInit('mapbox');
    // this.mapboxService.searchNearby(this.inputLocation);
  }
  public getData(inputLocation:string): void{
    this.mapboxService.searchNearby(inputLocation);
   }

  public getMapPosition() {
    this.yelpService.searchYelp(this.mapboxService.lat, this.mapboxService.lng).then(data => {
      this.businesses = data.businesses
    })
  }

  public favorite(name: string, rating: string, price: string) {
    this.databaseService.addFavorite(new Favorite(name, rating, price))
    alert("You added " + name+ " to your favorites!")
    }

  public showFavorites(){
   this.databaseService.getFavorites().subscribe(data => {
      this.listFavorites = data;
    })
    console.log(this.listFavorites)
    }
  }
