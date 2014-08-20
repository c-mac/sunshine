/**
 * Created by Cameron on 8/16/14.
 */

angular.module('sunshine', [])

.controller('AppCtrl', function($scope, AppService) {
  $scope.question = '';
   //snagged from http://stackoverflow.com/questions/12505760/angularjs-processing-http-response-in-service
   AppService.getRandomQuestion().then(function(d) {
     $scope.question = d;
   });
 })


.service('AppService', function($http) {

   //TODO: make
   //snagged from http://stackoverflow.com/questions/12505760/angularjs-processing-http-response-in-service
  var AppService = {
    getRandomQuestion: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get('../assets/data.json').then(function (response) {
        // The then function here is an opportunity to modify the response
        console.log(response);
        // The return value gets picked up by the then in the controller.
        return response.data.questions[Math.floor(Math.random() * response.data.questions.length)];
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
    scope: {
      question: '=',
    },
    //templateUrl: 'sun-question-prompt.html'
    template: '<div class="row">' +
                '<div class="col-sm-3"></div>' +
                '<div class="col-sm-6">' +
                  '<label>{{question}}</label>' +
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