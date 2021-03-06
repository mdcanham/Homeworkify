'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SubmissionAddCtrl
 * @description
 * # SubmissionAddCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp')
 .controller('SubmissionAddCtrl', function ($scope, Submission, $rootScope, $location) {
 $scope.submission = {};

 var student = $rootScope.homeworkList;

 $scope.submission.forHomework  = $location.search().hwID;
 $scope.title  = $location.search().title;
 $scope.question = $location.search().question;
 $scope.submission.student      = '55d9ac9a9389ce6b46707672';

 $scope.saveSubmission = function() {
   Submission.post($scope.submission).then(function() {
     $location.path('/');
   });
 };
 });
