(function () {
  var app = angular.module('store1', ['ngRoute', 'ngResource']);
  var app2 = angular.module('store2', ['ngMessages']);
  var app3 = angular.module('store', ['store1', 'store2']);

  app.controller('StoreController', function () {
    this.product = gem;
  });
  
  app2.controller('mainController', function ($scope) {

  // function to submit the form after all validation has occurred			
  $scope.submitForm = function () {

    // check to make sure the form is completely valid
    if ($scope.contactForm.$valid) {
      alert('our form is amazing');
    }

  };

});

  var gem = [
    {
      name: 'Pebbles',
      quantity: 5,
      price: 6.95,
  },
    {
      name: 'Angular Chiffon Printed',
      price: 41.19,
      description: '',
  }];

  app.config(function ($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'main.html',
      controller: 'StoreController'
    }).
    when('/product/:adultId', {
      templateUrl: 'adult-detail.html',
      controller: 'StoreController'
    }).
    when('/contact', {
      templateUrl: 'contact.html',
      controller: 'mainController'
    }).
    otherwise({
      redirectTo: '/adults'
    });
  });

})();