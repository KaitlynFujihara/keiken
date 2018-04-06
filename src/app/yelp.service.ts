import { yelpKey } from '../local/api-keys'
import { Injectable } from '@angular/core';
import { MapComponent } from './map/map.component'



@Injectable()
export class YelpService {
  public async searchYelp(location:{lng:string, lat:string}): Promise<any>{
    console.log(location);
    const url = `https://fire-storm.glitch.me/yelp-search`
    const request = new Request(url,{
    headers: {"longitude": location.lng.toString(), "latitude":location.lat.toString()}
  });
    const response: Response = await fetch(request);
    if (response){
      return await response.json(); //json part of response object. it is a method on response object that parses response.
    }
    return Promise.reject("Fetch request failed");

  }
}
