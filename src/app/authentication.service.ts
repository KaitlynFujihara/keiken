import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from './user.model'

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;
  authenticatedUsername: string;


  constructor(
    public afAuth: AngularFireAuth,
    public userService: UserService
) {
    this.user = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(signedInUser => {
       if (signedInUser) {
         let uid = firebase.auth().currentUser.uid;

        //  const username = signedInUser.additionalUserInfo.username;
         this.authenticatedUsername = uid;

         this.userService.userExists(uid).subscribe(user => {
           if (!user) {
             const newUser = new User(
               signedInUser.user.displayName, signedInUser.user.uid
             );
             this.userService.createUser(newUser);

           }
         });
       }
     });
 }


  logout() {
    this.afAuth.auth.signOut();
  }

}
