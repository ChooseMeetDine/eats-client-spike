app.controller('postPoll', function($scope, $http) {
  $scope.regUser = function (){
            user = {
            'pollName' : $scope.pollName,
            'time' : $scope.time
            
            };
            
            $http({
                method: 'POST',
                url: '#',
                headers: {'Content-Type': 'application/json'},
                data: user
            }).then(function successCallback(response){
                var token = response.data.token;
                var message = response.data;
                
                $scope.postPoll = message;
            }, function errorCallback(){
                $scope.PostPoll = "error";
            });
            
            console.log(user);   
            
    };
});