(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.product = gem;
  });

  var gem = [
  {
    name: 'Printed Chiffon Angular',
    price: 61.19,
    description: '',
  },
  {
  name: 'Angular Chiffon Printed',
  price: 41.19,
  description: '',
  }
  ];

})();

//function CartCtrl($scope) {
//  $scope.items = [
//    {title: 'Paint pots', quantity: 8, price: 3.95},
//    {title: 'Polka dots', quantity: 17, price: 12.95},
//    {title: 'Pebbles', quantity: 5, price: 6.95}
//  ];
//  $scope.remove = function(index) {
//    $scope.items.splice(index,1);
//  };
//  $scope.in= { 
//    title: 'Title',
//    quantity:0,
//    price:0
//  };
//  $scope.addItem = function () {
//    $scope.items.push($scope.in);
//    $scope.in = {
//      title: 'Title',
//      quantity:0,
//      price:0
//    };
//  };
//};

//(function(angular) {
//  var app = angular.module("contact", []);
//
//  app.controller("contactForm", ['$scope', '$http', function($scope, $http) {
//    $scope.success = false;
//    $scope.error = false;
//
//    $scope.sendMessage = function( input ) {
//      $http({
//          method: 'POST',
//          url: '/processForm.php',
//          data: input,
//          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
//      })
//      .success( function(data) {
//        if ( data.success ) {
//          $scope.success = true;
//        } else {
//          $scope.error = true;
//        }
//      } );
//    }
//  }]);
//})(angular);

//(function(){
//  var app = angular.module('store', []);
//
//  app.controller('StoreController', function(){
//    this.product = gem;
//  });
//
//  var gem = [
//  {
//    name: 'Printed Chiffon Angular',
//    price: 61.19,
//    description: '',
//  },
//  {
//  name: 'Angular Chiffon Printed',
//  price: 41.19,
//  description: '',
//  }
//  ];
//
//})();