import { Component } from '@angular/core';
import { MapboxService } from './mapbox.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'New';
  constructor(public mapboxService: MapboxService){
  }
  public ngAfterViewInit():void{
    this.mapboxService.mapboxInit('mapbox');
    this.mapboxService.searchNearby();
  }
}
