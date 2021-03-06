 import { mapboxConfig } from '../local/mapbox.config';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core'
import { MapComponent } from './map/map.component'
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import { YelpService } from './yelp.service'



@Injectable()
export class MapboxService {
  searchResults: any;
  public map;
  public lat;
  public lng;
  constructor(){}

  public ngOnInit():void {

  }
  public mapboxInit(elementId:string):void {
    mapboxgl.accessToken= mapboxConfig.accessToken;
    this.map = new mapboxgl.Map({
    container: elementId,
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [134, 38],
    zoom: 4.7
    });
  }
  public async searchNearby(inputLocation: string){
    mapboxgl.accessToken = mapboxConfig.accessToken;
    const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${inputLocation}.json?access_token=${mapboxConfig.accessToken}`);
    const searchResults = await response.json();
    this.lat= searchResults.features[0].center[0];
    this.lng= searchResults.features[0].center[1];
    this.map = new mapboxgl.Map({
    container: 'mapbox',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [this.lat, this.lng],
    zoom: 10,
    });
  }

  public onMapClick(): Observable<any>{
    return Observable.create(observer=>{
      this.map.on('click', function(event) {
        observer.next(event);
        this.searchNearby();
       });
     });
   }
  }
