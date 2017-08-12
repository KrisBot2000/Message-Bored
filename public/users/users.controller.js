var myApp = angular.module('myApp');

myApp.controller('UsersController', ['$scope', 'UsersService', function($scope, UsersService) {
  $scope.users = [];
  UsersService.getAllUsers()
  .then((users) => {
    console.log(users.data);
    $scope.users = users.data;
  });
}]);