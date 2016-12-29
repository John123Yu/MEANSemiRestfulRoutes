
     myApp.controller('createController', ['$scope', 'userFactory', '$location', function ($scope, userFactory, $location) {
      $scope.users = [];
      userFactory.getUsers(function (data){
          $scope.users = data;

      $scope.addUser = function() {
        userFactory.addUser($scope.user); 
        userFactory.getUsers(function (data){
          $scope.users = data;
          console.log(data)
        })
        $location.url('/');
      }
      })

    }]);