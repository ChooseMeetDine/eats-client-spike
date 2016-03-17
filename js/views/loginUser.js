app.controller('loginUser', function($scope, $http) {
        $scope.loginUser = function (){
            user = {
            'email' : $scope.email,
            'password' : $scope.password
            
            };
            
            $http({
                method: 'POST',
                url: '#',
                headers: {'Content-Type': 'application/json'},
                data: user
            }).then(function successCallback(response){
                var token = response.data.token;
                var message = response.data.message;
                
                $scope.loginUser = message;
            }, function errorCallback(){
                $scope.loginUser = 'error';
            });
            
            console.log(user);   
            
        };
});