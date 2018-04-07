
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AngularFireModule } from 'angularfire2';
import { AuthenticationService } from './authentication.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MasterFireBase } from '../local/api-keys'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MapYelpComponent } from './map-yelp/map-yelp.component';

export const firebaseConfig = {
  apiKey: MasterFireBase.apiKey,
  authDomain:  MasterFireBase.authDomain,
  databaseURL:  MasterFireBase.databaseURL,
  storageBucket:  MasterFireBase.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapYelpComponent,

  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
