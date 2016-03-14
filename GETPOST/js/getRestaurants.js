 var app = angular.module('app', []);
    app.controller('getData', function($scope, $http) {
    
        $http.get("js/restaurants.json").success(function(response) {
            $scope.item = response;
            var items = response.included;
        });
    });