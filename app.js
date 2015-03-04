angular.module('myApp', [])
  .run(function () {
  })
  .controller('MainCtrl', function ($scope) {

    $scope.photos = [];

    $scope.getPhoto = function (photoPromise) {
      photoPromise.then(function (imgSrc) {
        $scope.photos.push({
          src: imgSrc
        });
      });
    };

  });