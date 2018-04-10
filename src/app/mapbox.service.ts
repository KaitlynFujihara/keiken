 import { mapboxConfig } from '../local/mapbox.config';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core'
import { MapComponent } from './map/map.component'
import  mapboxgl = require ('mapbox-gl/dist/mapbox-gl.js');
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
    mapboxgl.accessToken = "pk.eyJ1Ijoia2F0aWVmdWppaGFyYSIsImEiOiJjamZsdnM1cDQwbXBsMnFxbzcwNzdscGE2In0.TX5_xN0gckWco-bvSENNeg"
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
// mapboxgl.accessToken = mapboxConfig.accessToken
// var map = new mapboxgl.Map({
// container: 'YOUR_CONTAINER_ELEMENT_ID',
// style: 'mapbox://styles/mapbox/streets-v10'
// });
