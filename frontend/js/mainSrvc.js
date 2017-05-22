angular.module('app')
.service('mainSrvc', function($http) {



  // PRODUCTS //////////////////////////////////////////
  this.test = 'service working'

  this.getProducts = function(callback){
    return $http.get('/api/products').then(
      function(response){
        console.log(response);
        callback(response.data);
      },
      function(err){
        callback(err);
        console.log(err);
      })
  };

  this.getProductsByCategory = (param) => {
    return $http({
      method: 'GET',
      url: '/products/' + param
    }).then(response => response.data)
  };

  this.getSingleProduct = (param) => {
    return $http({
      method: 'GET',
      url: '/products/' + param
    }).then(response => response.data)
  };

  // USERS //////////////////////////////////////////
  this.register = (user) => {
    return $http({
      method: 'POST',
      url: '/register',
      data: {user}
    }).then(response => response)
  };

  this.login = (email, password) => {
    return $http({
      method: 'POST',
      url: '/login',
      data: {
        email,
        password
      }
    }).then(response => response.data/*index number from table*/)
  };

  // CART //////////////////////////////////////////
  this.getCart = (user) => {
    return $http({
      method: 'POST',
      url: '/cart',
      data: {user}
    }).then(response => response.data)
  };

  this.deleteCart = () => {
    return $http({
      method: 'DELETE',
      url: '/cart/clear',
    }).then(response => response.data)
  };

  this.deleteItemInCart = (product, user) => {
    return $http({
      method: 'DELETE',
      url: '/cart/clear/' + product + '/' + user
    }).then(response => response)
  };

  this.createCart = (quantity, purchase, user_id) => {
    return $http({
      method: 'POST',
      url: '/create/cart',
      data: {
        quantity,
        purchase,
        user_id
      }
    }).then(response => response)
  };

  // EMAIL LIST //////////////////////////////////////////
  this.addEmail = (email) => {
    return $http({
      method: 'POST',
      url: '/email',
      data: {email}
    }).then(response => response)
  }; /*FOR THE FOOTER*/

  // ORDERS //////////////////////////////////////////
  this.getOrders = (user_id) => {
    return $http({
      method: 'GET',
      url: '/orders/' + user_id
    }).then(response => response.data)
  };

  this.submitOrder = (order) => {
    return $http({
      method: 'POST',
      url: '/orders/submit',
      data: {order}
    }).then(response => response.data)
  };
  //need to talk to Todd about this

});
