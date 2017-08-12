var myApp = angular.module('myApp');

myApp.controller('RegisterController', ['$location', '$scope', 'UsersService', function($location, $scope, UsersService) {

  $scope.username = '';
  // $scope.password = '';
  $scope.create =  function () {
    //console.log('in register.controller.js: ', $scope.username);

    let newUser = {
      username: $scope.username//,
      //password: $scope.password
    };

    UsersService.createNewUser(newUser)
    //RESTART HERE, REDIRECT TO INDIVIDUAL USERbyID
    .then((user) => {
    //let user_id = user.id;
    $location.path('/users/' + user.id);
    //console.log('in return in registerController $scope: ', $scope);
    //console.log('register.controller.js:', user);
    //UsersService.getUserAndMessages(user);
    });
  };
}]);