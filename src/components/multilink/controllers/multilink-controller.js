(function () {

  "use strict";

  /* @ngInject */
  function MultilinkController($scope, mzResponsivenessService) {
    $scope.media = mzResponsivenessService.media;
    $scope.allItemsShown = false;

    function refreshItemsToShow(ignoreMedia, mediaMode) {
      ignoreMedia = !!ignoreMedia;

      var amountOfItemsToShow = 0;
      if (ignoreMedia) {
        amountOfItemsToShow = _.size($scope.originalItems);
        unregister && unregister() && (unregister = null);
        $scope.allItemsShown = true;
      } else {
        if(!mediaMode) return;
        switch (mediaMode) {
          case "mobile":
            amountOfItemsToShow = 4;
            break;
          case "tablet":
            amountOfItemsToShow = 6;
            break;
          case "desktop":
          case "tv":
            amountOfItemsToShow = _.size($scope.originalItems);
            break;
        }
      }

      $scope.items = _.chain($scope.originalItems)
          .map(function (item) {
            return item;
          })
          .sortBy('rank')
          .slice(0, amountOfItemsToShow)
          .value();
    }

    var refreshItemsToShowCurried = _.curry(refreshItemsToShow);
    var unregister = $scope.$watch('media.mode', refreshItemsToShowCurried(false));

    $scope.showAllItems = refreshItemsToShow.bind(null, true);

  }

  angular.module("mzMultilink")
      .controller("mzMultilinkController", MultilinkController);

})();
