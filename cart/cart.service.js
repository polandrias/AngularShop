(function(){

	"use strict";

	var cartService = function($http, $rootScope){

		var addProductToCart = function(product, quantity){
			if($rootScope.cartProducts[product.name]){
				console.log("exists");
			}
			$rootScope.cartProducts[product.name] = { // uses product.name as an ID for the object
				product: product,
				quantity: quantity
			}
		}

		var removeProduct = function(product){
			var i = product.indexOf($rootScope.cartProducts);
			console.log(i);
			//console.log($rootScope.cartProducts);
			if(i > -1){
				$scope.cartProducts.splice(i, 1);
			}
		}

		return {
			addProductToCart: addProductToCart,
			removeProduct: removeProduct
		}

	}

	angular
		.module("Main")
		.factory("cartService", cartService);

}());