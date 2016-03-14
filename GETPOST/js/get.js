 var app = angular.module('app', []);
    app.controller('getData', function($scope, $http) {

        var currentDate = new Date();
        $scope.displayDate = currentDate.getTime();

        var voteMap = {};
            voteMap.user = [];
            voteMap.restaurant = [];
            voteMap.vote = [];
            voteMap.group = [];

        $http.get("get_vote.json").success(function(response) {
            $scope.item = response;
            var items = response.included;

            for(i = 0; i < items.length; i++){
                voteMap[items[i].type].push(items[i]);
            }

            $scope.included = voteMap;

            var expire = response.data.attributes.expires;
            $scope.expireDate = new Date(expire).getTime();
        });
    });