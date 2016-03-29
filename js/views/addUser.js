app.controller('addUser', function($scope, $http) {
        $scope.regUser = function (){
            user = {
                'name': $scope.name,
                'password': $scope.password,
                'email': $scope.email,
                'phone': $scope.phone,
                'photo': $scope.photo
            };
            
            $http({
                method: 'POST',
                url: 'http://localhost:5000/users',
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
                   
                