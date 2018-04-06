import { mapboxConfig } from '../local/mapbox.config';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core'
import { MapComponent } from './map/map.component'
import { MapFormComponent } from './map/map.component'

// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
import mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');


@Injectable()
export class MapboxService {
  public map;
  constructor(){}

  public ngOnInit():void {

  }
  public mapboxInit(elementId:string):void {
    mapboxgl.accessToken = mapboxConfig.accessToken;
    this.map = new mapboxgl.Map({
    container: elementId,
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [134, 38],
    zoom: 4.7
    });
  }
  public async searchNearby(inputLocation: string){
    const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${inputLocation}.json?access_token=${mapboxConfig.accessToken}`);
    const searchResults = await response.json();
    console.log(searchResults)
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
// mapboxgl.accessToken = mapboxConfig.accessToken
// var map = new mapboxgl.Map({
// container: 'YOUR_CONTAINER_ELEMENT_ID',
// style: 'mapbox://styles/mapbox/streets-v10'
// });
