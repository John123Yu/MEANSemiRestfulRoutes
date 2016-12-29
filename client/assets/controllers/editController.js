
     myApp.controller('editController', ['$scope', 'userFactory', '$routeParams', '$location', function ($scope, userFactory, $routeParams, $location) {
      $scope.user;
      userFactory.get1User(function (data){
          $scope.user = data;
      }, $routeParams.id)
      
      
      $scope.editUser = function() {

        userFactory.editUser($routeParams.id, $scope.user);
        $location.url('/');
      }


    }]);