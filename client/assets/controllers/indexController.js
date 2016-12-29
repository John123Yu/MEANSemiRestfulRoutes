
myApp.controller('userController', ['$scope', 'userFactory', '$location', function ($scope, userFactory, $location){
  
  $scope.users;
  userFactory.getUsers(function (data){
      $scope.users = data;
  })

  $scope.remove = function(id) {
    userFactory.removeUser(id);
    userFactory.getUsers(function (data){
      $scope.users = data;
      console.log(data)
    })
    $location.url('/');
  }


}])


myApp.controller('show1Controller', ['$scope', 'userFactory', '$routeParams', '$location', function ($scope, userFactory, $routeParams, $location) {
  $scope.user;
  userFactory.get1User(function (data){
  $scope.user = data;
  }, $routeParams.id)

}]);

