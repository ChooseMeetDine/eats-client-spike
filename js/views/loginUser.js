app.controller('loginUser', function($scope, $http) {
        $scope.loginUser = function (){
            user = {
            'email' : $scope.email,
            'password' : $scope.password
            
            };
            
            $http({
                method: 'POST',
                url: 'http://localhost:5000/auth',
                headers: {'Content-Type': 'application/json'},
                data: user
            }).then(function successCallback(response){
                var token = response.data.token;
                var message = response.data.message;
                
                console.log(message);
                console.log(token);
            }, function errorCallback(){
                console.log('error');
            });
            
            console.log(user);   
            
        };
});