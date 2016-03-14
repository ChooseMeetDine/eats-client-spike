var app = angular.module('app', []);
    app.controller('getRestaurants', function($scope, $http) {
    var start = new Date().getTime();
    var restaurantResult = {};    
    $http({
      method: 'GET',
      url: 'js/json/restaurants.json'
    }).then(function successCallback(response) {
        result(response.data);
    }, function errorCallback(response) {
       console.log("error");
    });
        
    function result(resultData){
        var items = resultData.data;
        for(var k in items){
            var restaurant = items[k];
            var restaurantData = {
                "name": restaurant.attributes.name,
                "lat": restaurant.attributes.latitude,
                "long":  restaurant.attributes.longitude,
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
    }
});
