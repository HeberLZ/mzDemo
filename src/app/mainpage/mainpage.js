(function () {

  "use strict";

  /* @ngInject */
  function mainpageConfig($stateProvider, $urlRouterProvider, mzAwesomeThingsPromise) {

    $stateProvider.state("mainpage", {
      url: "/",
      templateUrl: "app/mainpage/partials/mainpage.html",
      controller: "mzMainpageController",
      resolve: [mzAwesomeThingsPromise]
    });

    $urlRouterProvider.otherwise("/");

  }

  angular.module("mzMainpage", ["ngTouch", "ui.router", "mzCore", "mzMultilink", "mzColoredButton"])
      .config(mainpageConfig);

})();
