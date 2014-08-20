/**
 * Created by Cameron on 8/16/14.
 */

angular.module('sunshine', [])

.controller('AppCtrl', function($scope, AppService) {
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
      question: '='
    },
    template: '<div class="row">' +
                '<div class="col-sm-3"></div>' +
                '<div class="col-sm-6">' +
                  '<div class="form-group">' +
                    '<label>{{question}}</label>' +
                    '<textarea class="form-control" rows="3"></textarea>' +
                  '</div>' +
                  '<button type="button" class="btn btn-primary">Submit</button>' +
                  ' ' +
                  '<button type="button" class="btn btn-info pull-right">Skip</button>' +
                '</div>' +
                '<div class="col-sm-3"></div>' +
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