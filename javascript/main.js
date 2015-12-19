(function ($, WoW) {
	
	// initializes
	(new WoW).init();
	
	var menuToggler  = $('#menu-toggler');
	var dropdownMenu = $('.dropdown-menu');

	menuToggler
		.click(toggleMenu);

	function toggleMenu (e) {
		if (dropdownMenu.hasClass('visible')) {
			dropdownMenu.removeClass('visible');
		} else {
			dropdownMenu.addClass('visible');
		}
	}


	var app = angular.module('app', []);
	app.controller('CartCtrl', CartCtrl);
	app.controller('ContactCtrl', ContactCtrl);

	CartCtrl.$inject = ['$scope'];
	function CartCtrl ($scope) {

		var vm = this;
		vm.total = 0;
		vm.currency = '£';
		vm.checks = "1000";
		vm.items = [];

		vm.hasItem = hasItem;
		vm.addProduct = addProduct;
		vm.removeProduct = removeProduct;

		$scope.$watch('cart.items', function (items) {
			
			if (items.length) {
				vm.total = (vm.items.reduce(function (a,b) {
									return {value: a.value + b.value};
								}, {value: 0})).value;
				console.log(vm.total);
			} else {
				vm.total = 0;
			}
				console.log(vm.items);

		}, true);

		function addProduct (product) {
			vm.items.push(product);
		}

		function removeProduct (key) {
			vm.items.map(function  (item, index) {
				if (item.key == key) 
					vm.items.splice(index, 1);
			});

		}

		function hasItem (key) {
			var found = false;
			vm.items.map(function  (item) {
				if (item.key == key) 
					found = true;
			});
			return found;
		}
	}



	ContactCtrl.$inject = ['$scope'];
	function ContactCtrl ($scope) {

		var vm = this;
		vm.contact = {};

		vm.sendContact = sendContact;

		function sendContact () {
			console.log(vm.contact);
		}

	}






    $('#main-slider').on('slide.bs.carousel', function () {
    	
    });

})($,WOW);