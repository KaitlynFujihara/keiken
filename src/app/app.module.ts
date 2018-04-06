import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MapboxService } from './mapbox.service';
import { AppComponent } from './app.component';
import {SuiModule} from 'ng2-semantic-ui';
import { SafeHtmlPipe } from './safe-html.pipe';
import { MapComponent } from './map/map.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SafeHtmlPipe,
    MapComponent,
    SidebarComponent
  ],
  imports: [
    SuiModule,
    BrowserModule
  ],
  providers: [
    MapboxService
  ],
  bootstrap: [AppComponent]


})
export class AppModule { }
