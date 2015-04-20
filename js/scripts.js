bestRestaurant.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
  $scope.restaurants = [];
  $scope.addRestaurant = function() {
    $scope.restaurants.push({ name: $scope.restaurantName, type: $scope.restaurantType, price: $scope.restaurantPrice, location: $scope.restaurantLocation });
    $scope.restaurantType = null;
    $scope.restaurantName = null;
    $scope.restaurantPrice = null;
    $scope.restaurantLocation = null;
  };
  $scope.deleteRestaurant = function(restaurant) {
    var index = $scope.restaurants.indexOf(restaurant)
    $scope.restaurants.splice(index, 1);
  };
});
