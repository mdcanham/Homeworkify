'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        redirectTo: '/homework'
      })
      .when('/submission', {
        templateUrl: 'views/submission.html',
        controller: 'SubmissionCtrl',
      })
      .when('/homework', {
        templateUrl: 'views/homework.html',
        controller: 'HomeworkCtrl',
        controllerAs: 'homework'
      })
      .when('/create/submission', {
        templateUrl: 'views/submission-add.html',
        controller: 'SubmissionAddCtrl',
        controllerAs: 'submissionAdd'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

.factory('SubmissionRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setRestangularFields({
      id: '_id'
    });
  });
})

.factory('Submission', function(SubmissionRestangular) {
  return SubmissionRestangular.service('submission'); //This reffers to the submission endpoint on our server
})

.factory('HomeworkRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setRestangularFields({
      id: '_id'
    });
  });
})

.factory('Homework', function(HomeworkRestangular) {
  return HomeworkRestangular.service('homework'); //This reffers to the submission endpoint on our server
});
