var app = angular.module('app', []);
app.controller('postController', function($scope, $http){
    $scope.post = function(){
        $http({
    method: 'POST',
    url: 'postData.json',
    data: "name=" + name,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});

    };
});
