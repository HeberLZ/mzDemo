(function () {

  "use strict";

  /* @ngInject */
  function AwesomeThingsService($http, $q) {

    var ERR_INVALID_RESPONSE = "Invalid response from server";

    var awesomeThings = {};

    function getAwesomeThing(key){
      return awesomeThings[key];
    }

    function rankAwesome(awesome){
      awesome.rank = Math.random();
    }

    function findItemsSuccess(deferred, response) {
      if (_.isEmpty(response.data)) return deferred.reject(ERR_INVALID_RESPONSE);
      var indexedData = _.chain(response.data)
          .indexBy('key')
          .each(rankAwesome)
          .value();
      _.extend(awesomeThings, indexedData);
      deferred.resolve();
    }

    var findAwesomeThingsSuccessCurried = _.curry(findItemsSuccess);

    function findAwesomeThings() {
      var deferred = $q.defer();
      $http.get("fakebackend/awesomeThings")
          .then(findAwesomeThingsSuccessCurried(deferred), deferred.reject.bind(null, ERR_INVALID_RESPONSE));
      return deferred.promise;
    }

    function modifyRelatedAwesomeTitle(awesomeKey){
      var awesomeThing = awesomeThings[awesomeKey];
      if(_.isEmpty(awesomeThing)) return;
      var relatedAwesomeKey = awesomeThing.related;

      var relatedAwesomeThing = awesomeThings[relatedAwesomeKey];
      if(_.isEmpty(relatedAwesomeThing)) return;

      relatedAwesomeThing.title = relatedAwesomeThing.title.slice(1) + relatedAwesomeThing.title.slice(0, 1);
    }

    return {
      awesomeThings: awesomeThings,
      getAwesomeThing: getAwesomeThing,
      findAwesomeThings: findAwesomeThings,
      modifyRelatedAwesomeTitle: modifyRelatedAwesomeTitle
    };

  }

  /* @ngInject */
  function awesomeThingsPromise(mzAwesomeThingsService) {
    return mzAwesomeThingsService.findAwesomeThings();
  }

  angular.module("mzCore")
      .constant("mzAwesomeThingsPromise", awesomeThingsPromise)
      .factory("mzAwesomeThingsService", AwesomeThingsService);

})();
