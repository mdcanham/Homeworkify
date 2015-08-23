'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SubmissionCtrl
 * @description
 * # SubmissionCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp').controller('SubmissionCtrl', function ($scope, Submission) {
   $scope.hwSubmissions = Submission.getList().$object;
 });
