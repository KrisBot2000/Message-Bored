angular.module('myApp')
.service('UsersService', ['$http', function($http) {


  function getAllUsers(){
    return $http.get('/api/users')
    .then((users) => {
      //console.log(users);
      return users;
    })
  }

  function getUserAndMessages(userId){
    //console.log('userId in GUAM: ', userId);
    return $http.get('/api/users/'+ userId)
    .then((user) => {
      //console.log('in getUserAndMessages:', user);
      return user;
    })
  }

  function createNewUser(newUser){
    return $http.post('/api/users', newUser)
    .then((user) => {
      //console.log('in services.js:', user.data);
      return user.data;
    })
  }


  return {
    getAllUsers: getAllUsers,
    getUserAndMessages: getUserAndMessages,
    createNewUser: createNewUser
  };
}]);