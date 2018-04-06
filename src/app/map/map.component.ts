import { Component, OnInit } from '@angular/core';
import { MapboxService } from '../mapbox.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor(private router: Router, public mapboxService: MapboxService){
  }
  public ngOnInit(){
    this.mapboxService.mapboxInit('mapbox');
    this.mapboxService.searchNearby();
  }
}
