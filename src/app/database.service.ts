import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Favorite } from './models/favorite.model'


@Injectable()
export class DatabaseService {
  favorites: FirebaseListObservable<any[]>;
 constructor(private database: AngularFireDatabase) {
   this.favorites = database.list('favorites');
 }
   addFavorite(newFavorite: Favorite) {
     this.favorites.push(newFavorite);
   }

   getFavorites(){
  return this.favorites;
  }
}
