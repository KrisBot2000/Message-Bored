// creation uses a 2nd array argument to import dependencies
angular.module('myApp', ['ngRoute']);

// retrieval has only one argument
var myApp = angular.module('myApp');

myApp
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/users', {
    templateUrl: '/users/users.html',
    controller: 'UsersController'
  })
  .when('/users/register', {
    templateUrl: '/register/register.html',
    controller: 'RegisterController'
  })
  .when('/users/:id', {
    templateUrl: '/usersById/usersById.html',
    controller: 'UsersByIdController'
  })
  // .when('/topics/:id', {
  //   templateUrl: '/topics/topics.html',
  //   controller: 'TopicsController'
  // })
  // .when('/latest', {
  //   templateUrl: 'latest/latest.html',
  //   controller: 'LatestController'
  //})
  //MEH?????
  //.otherwise({ redirectTo: '/register' });

  $locationProvider.html5Mode(true);
}])
.run([function(){
    // initialize
    console.log('running');
}]);