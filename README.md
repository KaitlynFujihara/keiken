# Yoogle (Yelp/Google)

An application that allows you to search a location, and the resulting Yelp recommendations appear.
website: https://keiken-3873c.firebaseapp.com/

### April 10, 2018

## Description
In the input box, you query a location. You click "submit" and it shows you where that location is on a map using the Mapbox API. The next step is to click Yoogle, then it shows the resulting Yelp recommendations for that location you queried. If you want to "favorite" a location, you would click the star button under the location and this saves to Firebase. If you click "favorites" it shows you the items that you favorited.

## Specifications/User Expectations
* Allows you to see on a map where your search is (using latitude and longitude)
* Allows you to see recommendations for the location that you queried
* Allows you to "favorite" locations so that you can refer back to them later


### Setup/Installation Requirements
* Clone GitHub Repository
* Open in desktop
* run npm Install
* make a folder called "local" in your src folder
* make a file called api-keys.ts in the "local" folder
* export yelpKey and MasterFirebase api keys
* make a file called mapbox.config.ts in the "local" folder
* export mapboxConfig access token
* run ng serve --open to see what it looks like in a browser

### Known Bugs
Having trouble deploying it.

### Support and Contact Details
Please email Katie Fujihara (katiefujihara@gmail.com)with any questions, comments, or concerns.

### Technologies Used
Angular, Typescript, Firebase

### License
*MIT License

Copyright (c) [2018] [Katie Fujihara]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*

Copyright (c) 2018 Katie Fujihara
