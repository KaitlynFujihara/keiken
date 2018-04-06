
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

// export const firebaseConfig = {
//   apiKey: MasterFireBase.apiKey,
//   authDomain:  MasterFireBase.authDomain,
//   databaseURL:  MasterFireBase.databaseURL,
//   storageBucket:  MasterFireBase.storageBucket
// };

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule,
    // AngularFireAuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
