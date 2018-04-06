import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MapboxService } from './mapbox.service';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';


import {SuiModule} from 'ng2-semantic-ui';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';
import { ExploreComponent } from './explore/explore.component';
import { TokyoComponent } from './tokyo/tokyo.component';
import { VisitComponent } from './visit/visit.component';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    BottomNavbarComponent,
    ExploreComponent,
    TokyoComponent,
    VisitComponent,
    SafeHtmlPipe
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
