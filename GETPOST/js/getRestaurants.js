 var app = angular.module('app', []);
    app.controller('getRestaurants', function($scope, $http) {
    var voteMap = {};
        voteMap.user = [];
        voteMap.restaurant = [];
        voteMap.vote = [];
        voteMap.group = [];
    
    $http.get("js/json/restaurants.json").success(function(response) {
        $scope.item = response;
        var items = response.included;
    });
});