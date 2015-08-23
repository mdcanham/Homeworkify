'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SubmissionsCtrl
 * @description
 * # SubmissionsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp').controller('SubmissionsCtrl', function ($scope, Submission) {
  $scope.hwSubmissions = Submission.getList().$object;
});
