(function () {

  "use strict";

  /* @ngInject */
  function responsiveRun($window, mzResponsivenessService) {
    var screenSizePrefixes = ["xs", "sm", "md", "lg"];
    var htmlHack = _.reduce(screenSizePrefixes, function(acumulator, prefix){
      return acumulator + "<div class=\"visible-" + prefix + "\"></div>";
    }, "");
    var responsiveHack = angular.element(htmlHack);
    angular.element(document.body).append(responsiveHack);
    mzResponsivenessService.debouncedResize(responsiveHack);

    angular.element($window)
        .bind("resize", mzResponsivenessService.debouncedResize.bind(null, responsiveHack));
  }

  angular.module("mzResponsive", [])
      .run(responsiveRun);

})();
