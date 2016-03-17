app.controller('regUser', function($scope, $http) {
  $scope.regUser = function (){
            user = {
            'name' : $scope.name,
            'email' : $scope.regEmail,
            'password' : $scope.regPass
            
            };
            
            $http({
                method: 'POST',
                url: '#',
                headers: {'Content-Type': 'application/json'},
                data: user
            }).then(function successCallback(response){
                var token = response.data.token;
                var message = response.data.message;
                
                $scope.regUser = message;
            }, function errorCallback(){
                $scope.regUser = "error";
            });
            
            console.log(user);   
            
    };
});