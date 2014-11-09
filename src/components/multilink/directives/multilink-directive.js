(function () {

  "use strict";

  function MultilinkLink($scope, element, attrs) {

  }

  /* @ngInject */
  function MultilinkDirective() {
    return {
      restrict: "A",
      templateUrl: "components/multilink/partials/multilink.html",
      scope: {
        originalItems: "=mzMultilink"
      },
      controller: "mzMultilinkController",
      link: MultilinkLink
    };
  }

  angular.module("mzMultilink")
      .directive("mzMultilink", MultilinkDirective);

})();
