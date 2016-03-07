app.factory('vote', ['$http', function($http) { 
  return $http.get('../../get_vote.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
