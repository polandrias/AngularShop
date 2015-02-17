(function(){

	"use strict"; // for error messages - undeclared variables and more

	angular
		.module("Main",
			["Main.products", "Main.cart"]
		)
		.run(function($rootScope){
			$rootScope.cartProducts = {};
		});

})();