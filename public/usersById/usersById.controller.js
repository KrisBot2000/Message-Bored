var myApp = angular.module('myApp');

myApp.controller('UsersByIdController', ['$routeParams', '$scope', 'UsersService', function($routeParams, $scope, UsersService) {
  var userId = $routeParams.id;
  //console.log(userId);
  UsersService.getUserAndMessages(userId)
  .then((user) => {
    //console.log('user.data in usersById.controller:', user.data);
    $scope.user = user.data;
  });
}]);