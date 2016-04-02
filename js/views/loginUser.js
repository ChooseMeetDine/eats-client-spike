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
                
                console.log(message);
            }, function errorCallback(){
                console.log('error');
            });
            
            console.log(user);   
            
        };
});