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