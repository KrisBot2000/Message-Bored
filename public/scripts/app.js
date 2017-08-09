// creation uses a 2nd array argument to import dependencies
angular.module('myApp', ['ngRoute']);

// retrieval has only one argument
var myApp = angular.module('myApp');

myApp
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    //templateUrl: 'home.html',
    //controller: 'HomeController'
  })
  // .when('/books', {
  //   templateUrl: 'book.html',
  //   controller: 'BookController'
  // })
  // .when('/movies', {
  //   templateUrl: 'movie.html',
  //   controller: 'MovieController'
  // })
  .otherwise({ redirectTo: '/' });

  $locationProvider.html5Mode(true);
}])
.run(['$rootScope', 'APP_VERSION', function($rootScope, APP_VERSION){
    // initialize
    console.log('running');

    //$rootScope.version = APP_VERSION;
}]);