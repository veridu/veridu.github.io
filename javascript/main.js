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
	app.controller('ContactCtrl', ContactCtrl);

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


	if (window.location.hash) {
		scrollToHash(window.location.hash, 1000);
	}

	function scrollToHash (hash, speed) {
		if (! speed) speed = 2000;

		if ($(hash).offset()) {
			$('html, body').animate({
				scrollTop: ($(hash).offset().top - 120)
			}, 2000);
		}
	}

	// menu border
	(function  () {
		var fixed_header = $('nav.nav')[0];
		var header  =	$('nav.nav');

		console.warn(header);

		window.addEventListener('scroll', function () {
			var scrolled 	 = document.documentElement.scrollTop || document.body.scrollTop ;

			//will show
			if ( scrolled > 1 ){

				fixed_header.style.borderBottom =  '1px solid #eee';

			} else{ //will hide

				fixed_header.style.borderBottom =  '1px solid transparent';

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

	$window.resize(adjustHeights);
	adjustHeights();

	function adjustHeights() {
		var landingHeight = $window.height() -  menu.height();
		if ($window.width() > 767) {
			landingSection.css('height', landingHeight);
		} else {
			landingSection.css('height', 'auto');
		}

	}

	angular.module('app').controller('AppCtrl', AppCtrl);

	AppCtrl.$inject = ['$scope'];
	function AppCtrl ($scope) {

		var vm = this;
		vm.nextSlide = nextSlide;
		vm.prevSlide = prevSlide;

		$(".landing-section").on("swiperight", nextSlide);
		$(".landing-section").on("swipeleft", prevSlide);

		init();

		function nextSlide() {
			if (vm.slider.index == (vm.slider.length - 1)) {
				vm.slider.index = 0;
			} else {
				vm.slider.index++;
			}
		}

		function prevSlide() {
			if (vm.slider.index == 0) {
				vm.slider.index = 3;
			} else {
				vm.slider.index--;
			}
		}

		function init () {

			vm.slider = {
				index : 0,
				state: function(){ return vm.mainSliderStates[this.index]},
				status: function(){ return vm.progressStatuses[this.index]},
				length: 4
			};

			$scope.$watch('App.slider.index' , function (value) {
				if (value) {
					clearInterval(vm.carouselInterval);
					vm.carouselInterval = setInterval(moveCarousel, 4000);
				}
			});


			function moveCarousel() {
		    	$scope.$apply(function () {
					vm.nextSlide();
		    	});
			}

			vm.carouselInterval = setInterval(moveCarousel, 4000);

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
					imgStyle: 'background-size: 200%;',
					imgMdStyle: 'background-size: 200% !important;',
					sex: 'Male',
					sexPercent: 62,
					verified: true,
					birth: 49
				},
				{
					hours: 2563,
					hoursPercent: 78,
					name: 'Rasmus Groth',
					img: '/img/rasmus-big-fliph.jpg',
					imgStyle: 'background-position: left top !important;',
					imgMdStyle: 'background-size: 280% !important; background-position: left top !important;',
					namePercent: 78,
					sex: 'Male',
					sexPercent: 72,
					verified: false,
					birth: 59
				},
				{
					hours: 2063,
					hoursPercent: 58,
					name: 'Carl Ejlers',
					img: '/img/carl2.jpeg',
					imgStyle: 'background-size: 200%;',
					imgMdStyle: 'background-size: 200% !important;',
					namePercent: 68,
					sex: 'Male',
					sexPercent: 52,
					verified: false,
					birth: 49
				},
				{
					hours: 3563,
					hoursPercent: 82,
					name: 'Rasmus Groth',
					img: '/img/rasmus-big-fliph.jpg',
					namePercent: 80,
					imgStyle: 'background-position: left top !important;',
					imgMdStyle: 'background-size: 280% !important; background-position: left top !important;',
					sex: 'Male',
					sexPercent: 72,
					verified: true,
					birth: 89
				},
			];

		}
		}

})($,WOW);
