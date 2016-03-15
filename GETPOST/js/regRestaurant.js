app.controller('forms', function($scope, $http) {
        $scope.regRestaurant = function (){
            user = {
                'name' : $scope.name,
                'category' : $scope.category,
                'pricerate' : $scope.priceRate,
                'rating' : $scope.rating,
                'info' : $scope.info,
                'photo' : $scope.photo,
                'longitude' : $scope.longitude,
                'latitude' : $scope.latitude
            
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
                   
                