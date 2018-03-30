import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';


import {SuiModule} from 'ng2-semantic-ui';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';
import { ExploreComponent } from './explore/explore.component';
import { TokyoComponent } from './tokyo/tokyo.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    BottomNavbarComponent,
    ExploreComponent,
    TokyoComponent
  ],
  imports: [
    SuiModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
