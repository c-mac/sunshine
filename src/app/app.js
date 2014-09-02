/**
 * Created by Cameron on 8/16/14.
 */


angular.module('sunshine', [])

.controller('AppCtrl', function($scope, QuestionService, AnswerService) {
  //snagged from http://stackoverflow.com/questions/12505760/angularjs-processing-http-response-in-service
  //TODO: refactor using angular 'resolve'
  QuestionService.getRandomQuestion().then(function(d) {
    $scope.question = d;
  });

  AnswerService.getRandomAnswer().then(function(d) {
    $scope.answer = d;
  });

  $scope.skipQuestion = function() {
    QuestionService.getRandomQuestion().then(function(d) {
      $scope.question = d;
    });
  };

  $scope.skipAnswer = function() {
    AnswerService.getRandomAnswer().then(function(d) {
      $scope.answer = d;
    });
  }


 })


.service('QuestionService', function($http) {

  //snagged from http://stackoverflow.com/questions/12505760/angularjs-processing-http-response-in-service
  var QuestionService = {
    getRandomQuestion: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get('src/assets/data.json').then(function (response) {
        // The then function here is an opportunity to modify the response
        // The return value gets picked up by the then in the controller.
        return response.data.questions[Math.floor(Math.random() * response.data.questions.length)];
      });
      // Return the promise to the controller
      return promise;
    }
  };
  return QuestionService;
 })


.service('AnswerService', function($http) {


    var AnswerService = {
        getAnswers: function() {
            var promise = $http.get('/api/answers').then(function(response) {
                return response.data;
            });
            return promise;
        },

        getRandomAnswer: function() {
            var promise = $http.get('/api/answers').then(function(response) {
                return response.data[Math.floor(Math.random() * response.data.length)];
            });
            return promise;
        }
    }

    return AnswerService;
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
      skipQuestion: '&'
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
                  '<button type="button" class="btn btn-info pull-right" ng-click="skipQuestion()">Skip</button>' +
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

.directive('sunAnswerDisplay', function() {
        return {
            restrict: 'E',
            scope: {
                answer: '=',
                skipAnswer: '&'
            },
            template: '<div class="row">' +
                        '<div class="col-sm-3"></div>' +
                        '<div class="col-sm-6">' +
                         '<h2>Previously, you wrote:</h2>' +
                         '<div class="form-group">' +
                            '<label>{{answer.question}}</label><br>' +
                            '<label>{{answer.response}}</label>' +
                         '</div>' +
                        '<button type="button" class="btn btn-info pull-right" ng-click="skipAnswer()">See another answer</button>' +
                        '</div>' +
                        '<div class="col-sm-3"></div>' +
                        '</div>'
        }
    })
;