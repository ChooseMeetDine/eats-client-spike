app.controller('getUserInformation', function($scope, $http) {
    $http({
      method: 'GET',
      url: 'js/json/userinformation.json'
    }).then(function successCallback(response) {
        result(response.data);
    }, function errorCallback(response) {
       console.log("error");
    });
});
