import { Injectable } from '@angular/core';
import { instagramKey } from './api-keys'

@Injectable()
export class InstagramService {

    parameters:string[] = [];

    constructor() {}

    addParam(paramName, value) {
      this.parameters.push(`${paramName}=${value}`);
    }

    authURL() {
      let url = 'https://api.instagram.com/oauth/authorize/?client_id=84297e652c5d46ea87d91b6ca71c283f&redirect_uri=localhost:4200&response_type=code'
      return url;
    }

    getPromise(url) {
      return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        request.onload = function() {
          if (request.status === 200) {
            let response = request.response;
            resolve(response);
          } else {
            reject(Error(request.statusText));
          }
        }
        request.open("GET", url, true);
        request.send();
      });
    }
    makeCall(resolve, reject) {
      this.addParam('part', 'snippet');
      this.addParam('type', 'video');
      this.addParam('maxResults', '25');
      // this.addParam('key', instagramKey);
      let url = this.authURL();
      this.parameters = [];
      let promise = this.getPromise(url)
      promise.then(resolve, reject);
    }

  }
