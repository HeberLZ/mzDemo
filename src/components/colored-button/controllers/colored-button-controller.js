(function () {

  "use strict";

  /* @ngInject */
  function ColoredButtonController($scope, mzAwesomeThingsService, mzResponsivenessService) {
    $scope.awesomeThing = mzAwesomeThingsService.getAwesomeThing($scope.awesomeKey);
    $scope.media = mzResponsivenessService.media;

    $scope.modifyRelatedAwesome = mzAwesomeThingsService.modifyRelatedAwesomeTitle.bind(null, $scope.awesomeKey);
  }

  angular.module("mzColoredButton")
      .controller("mzColoredButtonController", ColoredButtonController);

})();
