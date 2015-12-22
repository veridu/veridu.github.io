(function ($, WoW) {
	
	// initializes
	(new WoW).init();
	
	var menuToggler  = $('#menu-toggler');
	var dropdownMenu = $('.dropdown-menu');

	dropdownMenu.find('a').click(toggleMenu);

	menuToggler
		.click(toggleMenu);

	function toggleMenu (e) {
		if (dropdownMenu.hasClass('visible')) {
			dropdownMenu.removeClass('visible');
		} else {
			dropdownMenu.addClass('visible');
		}
	}


	var app = angular.module('app', []).config(function($interpolateProvider){
    	$interpolateProvider.startSymbol('({').endSymbol('})');	
	});
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
			} else {
				vm.total = 0;
			}

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


	// Contact controller

	ContactCtrl.$inject = ['$scope'];
	function ContactCtrl ($scope) {

		var vm = this;
		vm.contact = {};

		vm.sendContact = sendContact;

		function sendContact () {
			console.log(vm.contact);
		}

	}

	// menu border
	(function  () {
		var fixed_header = document.querySelector('.menu');
		var header  =	$('.menu')

		window.addEventListener('scroll', function () {
			var scrolled 	 = document.documentElement.scrollTop || document.body.scrollTop ;

			//will show
			if ( scrolled > 1 ){

				fixed_header.style.border =  '1px solid #eee';

			} else{ //will hide

				fixed_header.style.border =  '1px solid transparent';

			} 
		})
	})();

	// sets landing height to 100%
	
	var landingHeight = $(window).height() -  $('.menu').height();
	var landingSection = $('.landing-section');
	var sliderProgressCt = $('.slider-progress-container');
	var menu = $('.menu');
	var $window = $(window);

	landingSection.css('height', landingHeight);
	sliderProgressCt.css('top',  - landingHeight * 0.1);

	$window.resize(function() {
		var landingHeight = $window.height() -  menu.height();
		if ($window.width() > 768) {
			landingSection.css('height', landingHeight);		
		} else {
			landingSection.css('height', 'auto');		
		}

	});
	
	angular.module('app').controller('AppCtrl', AppCtrl);

	AppCtrl.$inject = ['$scope'];
	function AppCtrl ($scope) {

		var vm = this;


		init();
		function init () {
			

			vm.slider = {
				index : 0,
				state: function(){ return vm.mainSliderStates[this.index]},
				status: function(){ return vm.progressStatuses[this.index]},
			};


		    var i;

		    $('#main-slider').on('slide.bs.carousel', function (slider) {
		    	$scope.$apply(function () {
		    		vm.slider.index = $(slider.relatedTarget).attr('data-index');
		    	});
		    });


			vm.mainSliderStates = [ 
				'customer-1',
				'customer-2',
				'customer-3',
				'customer-4'
			];

			vm.progressStatuses = [ 
				{
					hours: 2263,
					hoursPercent: 68,
					name: 'Carl Ejlers',
					namePercent: 48,
					img: '/img/carl2.jpeg',
					imgStyle: '',
					sex: 'Male',
					sexPercent: 62,
					birth: 49
				},
				{
					hours: 2563,
					hoursPercent: 78,
					name: 'Rasmus Groth',
					img: '/img/rasmus-big-fliph.jpg',
					imgStyle: 'background-position: left top !important;',
					namePercent: 78,
					sex: 'Male',
					sexPercent: 72,
					birth: 59
				},
				{
					hours: 2063,
					hoursPercent: 58,
					name: 'Magalie Pimentel',
					img: '/img/magalie.jpg',
					imgStyle: 'background-position: right center !important; background-color:white;',
					namePercent: 68,
					sex: 'Female',
					sexPercent: 52,
					birth: 49
				},
				{
					hours: 3563,
					hoursPercent: 82,
					name: 'Carl Ejlers',
					namePercent: 80,
					img: '/img/carl1.png',
					imgStyle: 'background-position: right center !important; background-color:white;',
					sex: 'Male',
					sexPercent: 72,
					birth: 89
				},
			];

		}
	}

})($,WOW);