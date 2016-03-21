var app = angular.module('app', ['ui.bootstrap', 'ngMaterial'])


    // create the controller and inject Angular's $scope
    app.controller('pages', function($scope) {
        // create a message to display in our view
        $scope.map = {
                templateUrl : 'map.html',
                controller  : 'contactController'
            };
    });
