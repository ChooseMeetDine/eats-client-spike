var app = angular.module('app', []);
    app.controller('registerUser', function($scope, $http) {
        
        var user;
        
        $scope.submit = function (){
            user = {
            'email' : $scope.email,
            'password' : $scope.password
            
            };
            
            $http({
                method: 'POST',
                url: 'https://eats-api-develop.herokuapp.com/auth',
                headers: {'Content-Type': 'application/json'},
                data: user
            }).then(function successCallback(){
                $scope.submitted = user;
            }, function errorCallback(){
                $scope.submitted = "error";
            });
            
            console.log(user);    
        };
    });
                   
                