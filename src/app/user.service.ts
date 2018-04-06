import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  constructor(public database: AngularFireDatabase) { }

  getUserByUsername(username: string): FirebaseListObservable<any[]> {
    return this.database.list(`users`, {query: {orderByChild: 'username', equalTo: username}});
  }

  getUserByUID(uid:string): FirebaseListObservable<any[]>{
    return this.database.list(`users`, {query: {orderByChild: 'uid', equalTo: uid}});
  }

  createUser(newUser: User): void {
    this.database.list(`users`).push(newUser);
  }
  userExists(uid: string): Observable<boolean> {
    console.log(uid)
     return this.getUserByUID(uid).map(data => !!data[0]);
   }


}
