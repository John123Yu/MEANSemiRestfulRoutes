
 myApp.factory('userFactory', [ '$filter', '$http', '$location', function ($filter, $http, $location){

        var users;
        var user;
        var factory = {};

        factory.getUsers = function (callback){
          $http.get('/users').then(function(data) {
            users = data.data
            callback(users);
          })
        }

        factory.get1User = function(callback, id) {
          $http.get('/user/' +id).then(function(data){
            console.log("success showing a user")
            console.log(data.data)
            user = data.data
            callback(user)
          })
        }

        factory.editUser = function(id, user) {
          $http.put('/user/' + id, user).then(function(data){
            console.log("success editing new user")
          })
        }

        factory.addUser = function(newUser) {
          console.log(newUser)
          $http.post('/user', newUser).then(function(data){
            console.log("success adding new user")
          })
        }

        factory.removeUser = function(id) {
          console.log(id)
          $http.delete('/user/' + id).then(function(data){
            console.log("success removing new user")
          })
        }
        return factory;
    }]);