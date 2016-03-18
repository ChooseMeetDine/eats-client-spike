app.controller('getRestaurants', function($scope, $http) { 
	//temporary variables for recording exec. time
    var start = new Date().getTime();
	//variable containing the proccessed result from http get request
    var restaurantResult = {};
	//url for restaurang get request
    var link = 'dummy_data/restaurants.json';

    getRestaurant(link);
    //function for making a http get request on restaurant data
    function getRestaurant(url){
        var link = url;
        $http({
          method: 'GET',
          url: link
        }).then(function successCallback(response) {
			//on successfull callback
            resultRestaurant(response.data);
        }, function errorCallback(response) {
           console.log("error");
        });
    }
    
	//function for re-structuring the json data from get request to 
	//a structure suitable for leaflet maps
    function resultRestaurant(resultData){
        var items = resultData.data;
        for(var k in items){
            var restaurant = items[k];
			//The new data structure
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
			//saves the new restaurant object into global variable, with restaurang id as key.
            var id = restaurant.id;
            restaurantResult[id] = restaurantData;
        }
        
        placeMarker(restaurantResult);
        //temporary variables for recording exec. time
        var end = new Date().getTime();
        var time = end - start;
        //console.log("Exec time = " + time);
    }
});
