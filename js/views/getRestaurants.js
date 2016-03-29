app.controller('getRestaurants', function($scope, $http) {
      
    var start = new Date().getTime();
    var restaurantResult = {};    
    var link = 'http://localhost:5000/restaurants';
    
    
    getRestaurant(link);
    
    function getRestaurant(url){
        var link = url;
        $http({
          method: 'GET',
          url: link
        }).then(function successCallback(response) {
            resultRestaurant(response.data);
        }, function errorCallback(response) {
           console.log("Error, cannot load restaurants!");
        });
    }
        
    function resultRestaurant(resultData){
        var items = resultData.data;
        for(var k in items){
            var restaurant = items[k];
            var restaurantData = {
                "id" : restaurant.id,
                "name": restaurant.attributes.name,
                "lat": restaurant.attributes.lat,
                "long":  restaurant.attributes.lng,
                "photo": restaurant.attributes.photo,
                "rating":  restaurant.attributes.rating,
                "extra": {
                    "info":  restaurant.attributes.info,
                    "pricerate":  restaurant.attributes.pricerate,
                    "number_votes":  restaurant.attributes.number_votes,
                    "number_votes-won":  restaurant.attributes.number_won_votes,
                    "categories":  restaurant.relationships.data
                }
            }
            var id = restaurant.id;
            restaurantResult[id] = restaurantData;
        }
        
        placeMarker(restaurantResult);
        
        
        var end = new Date().getTime();
        var time = end - start;
        console.log("Exec time = " + time);
        
        
        $scope.createInfoScopes = function(id){
            $scope.content = restaurantResult[id];
        }
            
    }
    
    
   
    
});
