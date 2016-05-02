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
      if ($scope.contactForm.$error) {
        alert('our form is amazing');
      }
    };
  });

  var gem = [
    {
      sku: 1,
      name: 'Pebbles',
      description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
      quantity: 5,
      price: 6.95,
  },
    {
      sku: 2,
      name: 'Angular Chiffon Printed',
      description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
      price: 41.19,
  }];

  app.config(function ($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'main.html',
      controller: 'StoreController'
    }).
    when('/product/', {
      //      controller: function StoreController($scope, $routeParams, Products) {
      //        //this.product = Products.findById($routeParams.id);
      //        var productId = parseInt($routeParams.id)
      //        this.productId = $routeParams.id;
      //        this.product = Products.find(function (product) {
      //          return (product.id === productId);
      //        });
      //      },
      templateUrl: 'product.html',
      controller: 'StoreController'
        // Expression, fx. ng-bind="productController.product"
    }).
    when('/contact', {
      templateUrl: 'contact.html',
      controller: 'mainController'
    }).
    otherwise({
      redirectTo: 'main.html'
    });
  });



})();