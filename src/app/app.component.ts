import { Component } from '@angular/core';
import { MapboxService } from './mapbox.service';
import { MapComponent } from './map/map.component';
import { SidebarComponent } from './sidebar/sidebar.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'New';
}
