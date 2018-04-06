import { Component } from '@angular/core';
import { MapboxService } from './mapbox.service';
import { MapComponent } from './map/map.component';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService, UserService]
})
export class AppComponent {
  title = 'Yoogle';
  private isLoggedIn: boolean;
  private userName: string;
  private userUID: string;

  user;
  databaseUser;

  constructor(private router: Router, public authService: AuthenticationService, public userService: UserService) {
    // this.authService.user.subscribe(user => {
    //   console.log(user)
    //   if (user === null) {
    //     this.isLoggedIn = false;
    //   } else {
    //     this.isLoggedIn = true;
    //     this.userName = user.displayName;
    //     this.userUID = user.uid;
    //   }
    // });
  }

  login() {
    this.authService.login();

  }

  logout() {
    this.authService.logout();
    this.router.navigate([''])
  }

  goToProfile(databaseUser){
    this.userService.getUserByUID(this.userUID).subscribe(dataLastEmittedFromObserver => {
      this.databaseUser = dataLastEmittedFromObserver[0];
      this.router.navigate(['profile', this.databaseUser.$key])
    });

  }

}
