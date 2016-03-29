app.controller('addPoll', function($scope, $http) {
    /*$scope.restaurants = [];
    
    function getRestaurant(){
        $http({
          method: 'GET',
          url: 'http://localhost:5000/restaurants'
        }).then(function successCallback(response) {
            resultRestaurant(response.data);
        }, function errorCallback(response) {
           console.log("Error, cannot load restaurants!");
        });
    }
    
    function resultRestaurant(resultData){
        var items = resultData.data;
        var restaurants;
        for(var k in items){
            var restaurant = items[k];
            $scope.restaurants.push(restaurant.id);
            var res = restaurant.id;
            console.log(res);
            }    
    }
    getRestaurant();
    */
        
        $scope.allowNewRestaurants = {value1: true};
        $scope.regPoll = function (){
            poll = {
                'name': $scope.name,
                'expires': $scope.expires,
                /*'restaurants': [$scope.restaurants],*/
                /*'users': [$scope.users],*/
                /*'group': $scope.group*/
                'allowNewRestaurants': $scope.allowNewRestaurants.value1
            };
            
            $http({
                method: 'POST',
                url: 'http://localhost:5000/polls',
                headers: {'Content-Type': 'application/json'},
                data: poll
            }).then(function successCallback(response){
                var token = response.data.token;
                var message = response.data.message;
                
                $scope.regUser = message;
            }, function errorCallback(){
                $scope.regUser = "error";
            });
            console.log(poll)
        };
    });
                   
                