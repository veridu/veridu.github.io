(function ($, WoW) {

	// initializes
	(new WoW).init();

	var menuToggler  = $('#menu-toggler');
	var $window = $(window);
	var dropdownMenu = $('.dropdown-menu');

	$('.btn')
		.mouseenter(function () {
			var $this = $(this);
			$this.height($this.height());
		});

	// fixed contact elements
	var fixedContactForm = $('#fixed-contact-form');
	var fixedContactContainer = $('.fixed-contact__container');
	var fixedContactButton = $('#fixed-contact__button');
	var fixedContactLabel = $('.fixed-contact__label');
	var fixedContactInput = $('.fixed-contact__container input');

	dropdownMenu.find('a').click(toggleMenu);

	var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


	// hides on ESC
	$window.keydown(function(evt) {
		if (evt.keyCode == 27) {
			fixedContactContainer.removeClass('active');
		}
	});

	fixedContactForm.submit(function (event) {
		event.preventDefault();

		if (fixedContactButton.hasClass('sent'))
			return false;

		if (fixedContactContainer.hasClass('active')) {
			if (! valid(fixedContactInput.val())) {
				// alerts user
				fixedContactContainer.find('.text-danger').show();

			} else {
				fixedContactContainer.find('.text-danger').hide();
				// sends e-mail
				fixedContactContainer.toggleClass('active');


				// hides input
				fixedContactButton.find('.hideable').toggleClass('animated fadeOut');
				fixedContactButton.addClass('sent');
				fixedContactContainer.find('.thank-you').toggleClass('animated fadeIn');

			}
		} else {
			fixedContactContainer.toggleClass('active');
			fixedContactInput.focus();

		}

		function valid(value) {
			return value && emailRegex.test(value);
		}

	});

	menuToggler
		.click(toggleMenu);

	$(".solutions-submenu a")
		.click(closeMenu);

	function toggleMenu (e) {

		if (dropdownMenu.hasClass('visible')) {
			closeMenu();
		} else {
			openMenu();
		}

	}

	function openMenu() {
		dropdownMenu.addClass('visible');
	}

	function closeMenu() {
		dropdownMenu.removeClass('fadeInDown');
		dropdownMenu.addClass('fadeOutUp');
		dropdownMenu.removeClass('visible');
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
		var fixed_header = $('nav.nav');

		window.addEventListener('scroll', function () {
			var scrolled = document.documentElement.scrollTop || document.body.scrollTop ;
			if (scrolled > 1){
				//will show
				fixed_header.addClass('shadowed');
			} else{
				//will hide
				fixed_header.removeClass('shadowed');

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
		var landingHeight = $window.height() - menu.height();

		// minimum height of the landing content for the contents to fit
		if (landingHeight < 750)
			landingHeight = 750;

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
		vm.togleSignin = togleSignin;

		$(".landing-section").on("swiperight", nextSlide);
		$(".landing-section").on("swipeleft", prevSlide);

		init();


		function togleSignin() {
			vm.showSignin = ! vm.showSignin;
		}

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
					vm.carouselInterval = setInterval(moveCarousel, 6000);
				}
			});


			function moveCarousel() {
		    	$scope.$apply(function () {
					vm.nextSlide();
		    	});
			}

			vm.carouselInterval = setInterval(moveCarousel, 6000);

			vm.mainSliderStates = [
				'customer-1',
				'customer-2',
				'customer-3',
				'customer-4'
			];

			vm.progressStatuses = [
				{
					hours: 1963,
					hoursPercent: 70,
					name: 'Carl Ejlers',
					namePercent: 58,
					img: '/img/carl2.jpeg',
					imgStyle: 'background-size: 200%;',
					imgMdStyle: 'background-size: 200% !important;',
					sex: 'Male',
					sexPercent: 62,
					verified: false,
					birth: 'carl@veridu.com',
					birthPercent: 89
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
					verified: true,
					birth: 'carl@veridu.com',
					birthPercent: 59
				},
				{
					hours: 2063,
					hoursPercent: 58,
					name: 'Carl Ejlers',
					img: '/img/carl2.jpeg',
					imgStyle: 'background-size: 200%;',
					imgMdStyle: 'background-size: 200% !important;',
					namePercent: 68,
					sex: 'Works at Veridu Ltd.',
					sexPercent: 72,
					verified: false,
					birth: 'carl@veridu.com',
					birthPercent: 39
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
					birth: 'carl@veridu.com',
					birthPercent: 89
				},
			];

		}
		}

		$('.page-loading').fadeOut();

})($,WOW);
