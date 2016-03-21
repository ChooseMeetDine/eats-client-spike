app.controller('slideMenu', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleMainMenu = buildToggler('main');
    $scope.toggleFilterMenu = buildToggler('filter');
    
    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
          if(navID == 'main'){
            $mdSidenav('filter').close();
          }else{
            $mdSidenav('main').close();  
          }
      }
    }
  })
  