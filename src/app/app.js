(function () {

  "use strict";

  /*
   * Should only have view module dependencies or pluggable behaviour enhancer
   */
  angular.module("mzDemo", ["mzResponsive", "mzMainpage"])
      .run(function($rootScope){
        $rootScope.$on("MEDIA_MODE_CHANGE", function(event, newMediaMode){
          console.log(newMediaMode);
        });
      });

})();
