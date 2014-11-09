(function () {

  "use strict";

  function ColoredButtonLink($scope, element, attrs) {

  }

  /* @ngInject */
  function ColoredButtonDirective() {
    return {
      restrict: "A",
      templateUrl: "components/colored-button/partials/colored-button.html",
      scope: {
        awesomeKey: "@mzColoredButton"
      },
      controller: "mzColoredButtonController",
      link: ColoredButtonLink
    };
  }

  angular.module("mzColoredButton")
      .directive("mzColoredButton", ColoredButtonDirective);

})();
