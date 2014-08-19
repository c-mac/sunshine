/**
 * Created by Cameron on 8/16/14.
 */

angular.module('app', [])

.controller('AppCtrl', function($scope, AppService) {
  $scope.questions = [];
  //snagged from http://stackoverflow.com/questions/12505760/angularjs-processing-http-response-in-service
  AppService.async().then(function(d) {
    $scope.data = d;
    $scope.questions = $scope.data.questions;
  });

  $scope.greeting = "FALCON KICK, SHOW ME YOUR MOVES!";

  //TODO: how can we get data from our injected AppService?
  //$scope.data = ?????
  $scope.people = [
    {name: 'marcus',  age: 23, money: Math.random() * 10},
    {name: 'cameron', age: 24, money: Math.random() * 10},
    {name: 'claire',  age: 22, money: Math.random() * 10},
  ];

  $scope.myPerson = $scope.people[0];
 })


.service('AppService', function($http) {

   //TODO: make
   //snagged from http://stackoverflow.com/questions/12505760/angularjs-processing-http-response-in-service
  var AppService = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get('../assets/data.json').then(function (response) {
        // The then function here is an opportunity to modify the response
        console.log(response);
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller
      return promise;
    }
  };
  return AppService;
 })

.controller('InputButtonCtrl', function() {
  this.message = '';

  this.messageEntered = function() {
    return this.message.length;
  };
})

.directive('sunQuestionPrompt', function() {
  return {
    restrict: 'E',
    // scope: {

    // },
    //templateUrl: 'sun-question-prompt.html'
    template: '<div class="row">' +
                '<div class="col-sm-3"></div>' +
                '<div class="col-sm-6">' +
                  '<label>Question:</label>' +
                  '<textarea class="form-control" rows="3"></textarea>' +
                '</div>' +
                '<div class="col-sm-3"></div>' +
              '</div>' +
              '<div class="row">' +
                '<div class="col-sm-5"></div>' +
                '<div class="col-sm-1">' +
                  '<button class="btn btn-primary">Submit</button>' +
                '</div>' +
                '<div class="col-sm-1">' +
                  '<button class="btn btn-primary">Skip</button>' +
                '</div>' +
                '<div class="col-sm-5"></div>' +
              '</div>'
  };
})

.directive('sunGreeting', function() {
  return {
    restrict: 'E',
    template: '<div class="row">' +
                '<div class="col-sm-3"></div>' +
                '<div class="col-sm-6">' +
                  '<h1>Sunshine!</h1>' +
                '</div>' +
                '<div class="col-sm-3"></div>' +
              '</div>'
  }
})
;