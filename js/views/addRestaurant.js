app.controller('addRestaurant', function($scope, $http) {
        var lat;
        var lng;
        var name = "test1";
        var cat = "13";
        var price = "5";
        var rating = "2";
        var info = "namn: " + name;
        var photo = "photo.jpg";
        $scope.placeMarkerOnClick = function(){
            
            var marker;
            console.log(markers);
            markers.clearLayers(e);
            map.on('click', function(e){
                if(marker){
                    map.removeLayer(marker);    
                }
            marker = L.marker(e.latlng).addTo(map);
            lat = e.latlng.lat; 
            lng = e.latlng.lng;
            console.log(lat);
            console.log(lng);            
            $scope.lat = lat;
            $scope.lng = lng;
            
            });
        };
    
    
        $scope.regRestaurant = function(){
            restaurant = {
                'name' : name,
                'categories' : [cat],
                'priceRate' : price,
                'rating' : rating,
                'info' : info,
                'photo' : photo,
                'lng' : lng,
                'lat' : lat
                /*
                'name' : $scope.name,
                'categories' : [$scope.category],
                'priceRate' : $scope.priceRate,
                'rating' : $scope.rating,
                'info' : $scope.info,
                'photo' : $scope.photo,
                'lng' : $scope.lng,
                'lat' : $scope.lat  */
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
                   
                