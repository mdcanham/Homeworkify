'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:HomeworkCtrl
 * @description
 * # HomeworkCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp').controller('HomeworkCtrl', function ($scope, Homework, $rootScope) {
   $scope.homeworks = Homework.getList().$object;
   $rootScope.homeworkList = $scope.homeworks;
 });
