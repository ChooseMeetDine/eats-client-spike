app.controller('addRestaurant', function($scope, $http) {
        $scope.regRestaurant = function (){
            restaurant = {
                'name' : $scope.name,
                'categories' : [$scope.category],
                'priceRate' : $scope.priceRate,
                'rating' : $scope.rating,
                'info' : $scope.info,
                'photo' : $scope.photo,
                'lng' : $scope.lng,
                'lat' : $scope.lat  
            };
            
            $http({
                method: 'POST',
                url: 'http://localhost:5000/restaurants',
                headers: {'Content-Type': 'application/json'},
                data: restaurant
            }).then(function successCallback(response){
                var token = response.data.token;
                var message = response.data.message;
                
                $scope.regRestaurant = message;
            }, function errorCallback(){
                $scope.regRestaurant = "error";
            });
            
            console.log(restaurant);   
            
        };
    });
                   
                