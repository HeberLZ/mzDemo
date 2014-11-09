(function () {

  "use strict";

  /* @ngInject */
  function ResponsivenessService($rootScope, $timeout) {

    var MEDIA_MODES = {
      "visible-xs": "mobile",
      "visible-sm": "tablet",
      "visible-md": "desktop",
      "visible-lg": "tv"
    };

    var media = {
      mode: null
    };

    function onResize(responsiveHack) {
      _.each(responsiveHack, function (element) {
        var newMediaMode = MEDIA_MODES[element.className];
        if (angular.element(element).is(":visible") && media.mode !== newMediaMode) {
          $timeout(function(){
            $rootScope.$broadcast("MEDIA_MODE_CHANGE", newMediaMode);
            media.mode = newMediaMode;
          }, 0);
          return false;
        }
      });
    }

    return {
      media: media,
      debouncedResize: _.debounce(onResize, 300)
    };

  }

  angular.module("mzResponsive")
      .factory("mzResponsivenessService", ResponsivenessService);

})();
