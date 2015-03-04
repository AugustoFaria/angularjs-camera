# angularjs-camera
HTML5 camera directive for angularjs based mobile applications.

## Features
* Uses ```<input type="file" capture="camera">``` so the camera of the mobile devices could be used without any need for intermediate APIs like cordova. In non-mobile devices it opens file selection dialog much like a regular file upload.
* The captured image data is returned base64 encoded, which can be used in the src attribute of ```<img>``` tag, or be sent to the server.
* The photo is resized to a manageable size in-browser by using ```<canvas>``` element to avoid possible memory issues.
* EXIF data is copied from the original photo to the resized image so the orientation of the photo won't be broken and other data like GPS info etc. are not lost.

## Usage
Add ```<camera on-select="getPhoto(photo)"></camera>``` to your html and implement the ```getPhoto``` function in the controller, which expects a promise for the base64 encoded image data. You will need to base64 decode the data in the server.

See index.html and app.js for an example.

## Notes
* This is not a production ready library, don't expect much...
* Tested only on webkit and ionicframework, however should work with other modern browsers too.

## Credits
* [ExifRestorer](http://www.perry.cz/files/ExifRestorer.js) by Martin Prantl is used to copy the exif data.

## TODO
* EXIF process is a little slow, reading the first 128kb of the image should be enough to parse the exif data.
* Use Web Workers for better responsibility and performance
* Customization

