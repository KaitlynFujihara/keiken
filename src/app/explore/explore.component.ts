import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../instagram.service'

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
  providers: [InstagramService]
})
export class ExploreComponent implements OnInit {

  public loginHtml: string = '';

  constructor(private instagramService:InstagramService) { }

  ngOnInit() {
    this.instagramService.makeCall(response => {this.loginHtml = response}, error => {console.log(error)});
  }

}
