app.controller('MoreInfo', function ($scope, $mdSidenav) {
    $scope.toggleMoreInfo = moreInfoToggler('info');
    
    function moreInfoToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
      }
    }
  })
  