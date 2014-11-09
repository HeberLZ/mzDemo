(function () {

  "use strict";

  /* @ngInject */
  function MainpageController($scope, mzAwesomeThingsService) {
    $scope.awesomeThings = mzAwesomeThingsService.awesomeThings;
  }

  angular.module("mzMainpage")
      .controller("mzMainpageController", MainpageController);

})();
