import { yelpKey } from '../local/api-keys'
import { Injectable } from '@angular/core';
import { MapComponent } from './map/map.component'
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class YelpService {
  locations: FirebaseListObservable<any[]>;
  public async searchYelp(lng:string, lat:string): Promise<any>{
    const url = `https://fire-storm.glitch.me/yelp-search`
    const request = new Request(url,{
    headers: {"longitude": lng, "latitude":lat}
  });
    const response: Response = await fetch(request);
    if (response){
      return await response.json(); //json part of response object. it is a method on response object that parses response.
    }
    return Promise.reject("Fetch request failed");

  }
}
