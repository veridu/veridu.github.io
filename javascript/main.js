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
	var landingActiveContent = $('.landing-active-content');

	fixedContactInput.focusout(function () {
		if (!fixedContactButton.is(':active')) {
			fixedContactContainer.removeClass('active');
		}
	});

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

		// actually submits
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
			// shows the form
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


	var app = angular.module('app');

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
				fixedContactContainer.css('display', 'table');
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
	var mbHelper =  $('#mobile-indicator');
	var mobile = mbHelper.is(':visible');

	landingSection.css('height', landingHeight);
	sliderProgressCt.css('top',  - landingHeight * 0.1);

	$window.resize(adjustHeights);
	adjustHeights();

	function adjustHeights() {
		mobile = mbHelper.is(':visible');
		var landingHeight = $window.height() - menu.height();
		// minimum height of the landing content for the contents to fit
		if (landingHeight < 750)
			landingHeight = 750;

		if (! mobile) {
			landingSection.css('height', landingHeight);
		} else {
			landingSection.css('height', 'auto');
		}

	}

	angular.module('app').controller('AppCtrl', AppCtrl);

	AppCtrl.$inject = ['$scope', 'Widget', 'Auth', 'Veridu'];
	function AppCtrl ($scope, Widget, Auth, Veridu) {

		var vm = this;

		vm.partnerIndex = 0;
		vm.Widget = Widget;
		vm.auth = auth;
		vm.nextSlide = nextSlide;
		vm.prevSlide = prevSlide;
		vm.auth = auth;
		vm.nextPartnerSlide = nextPartnerSlide;
		vm.prevPartnerSlide = prevPartnerSlide;
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

		function nextPartnerSlide() {
			if (vm.partnerIndex == 3) {
				vm.partnerIndex = 0;
			} else {
				vm.partnerIndex++;
			}
		}

		function prevPartnerSlide() {
			if (vm.partnerIndex == 0) {
				vm.partnerIndex = 3;
			} else {
				vm.partnerIndex--;
			}
		}

		$scope.$watch('App.Widget.user', function (user, pastUser) {
			console.warn(user);

			if (user) {
				vm.user = user;
				vm.mainSliderStates = ['customer'];
				vm.slider.length = 1;
				vm.slider.index = 0;
				var hoursPercent = (vm.Widget.hoursToFake / 5000) * 100;

				vm.progressStatuses = [
					{
						hours: vm.Widget.hoursToFake,
						hoursPercent: Math.max(hoursPercent, 60),
						name: user.name.value,
						namePercent: user.name.score * 100,
						img: user.picture || 'http://placehold.it/1000?text=Your%20Picture',
						imgStyle: 'background-size: 100% 125%;',
						imgMdStyle: '',
						sex: user.gender.value,
						sexPercent: user.gender.score * 100,
						verified: user.overall > 0.6,
						birth: user.email.value,
						birthPercent: user.email.score * 100
					}
				];
			} else {

			}
		}, true);

		function init () {

			vm.Widget.init($scope);
			setInitialState();

			vm.slider = {
				index : 0,
				state: function(){ return vm.mainSliderStates[this.index]},
				status: function(){ return vm.progressStatuses[this.index]},
				length: 4
			};

			$scope.$watch('App.slider.index' , function (value) {
				if (value) {
					clearInterval(vm.carouselInterval);
					vm.carouselInterval = setInterval(moveCarousel, 8000);
				}
			});


			function moveCarousel() {
		    	$scope.$apply(function () {
					vm.nextSlide();
		    	});
			}

			function movePartners() {
		    	$scope.$apply(function () {
					vm.nextPartnerSlide();
		    	});
			}

			vm.carouselInterval = setInterval(moveCarousel, 8000);
			vm.partnersInterval = setInterval(movePartners, 8000);
			vm.activeContentInterval = setInterval(checkActiveContent, 1000);

			function checkActiveContent() {

				if (landingActiveContent.find('*:hover').length) {
					clearInterval(vm.carouselInterval);
					vm.carouselInterval = setInterval(moveCarousel, 8000);
				}

				// hides email form
				if (fixedContactContainer.hasClass('active') && ! fixedContactContainer.hasClass('sent') && ! fixedContactInput.is(':focus') && ! fixedContactButton.is(':focus')) {
					fixedContactContainer.removeClass('active');
				}

			}

		}

		function setInitialState() {

			vm.mainSliderStates = [
				'customer',
				'peer',
				'candidate',
				'tenant'
			];

			vm.progressStatuses = [
				{
					hours: 1963,
					hoursPercent: 70,
					name: 'Johnatan Walsh',
					namePercent: 58,
					img: '/img/customer.jpeg',
					imgStyle:'background-size: 120%;',
					imgMdStyle: '',
					sex: 'Male',
					sexPercent: 62,
					verified: false,
					birth: 'carl@veridu.com',
					birthPercent: 89
				},
				{
					hours: 2563,
					hoursPercent: 78,
					name: 'Lucy Mormum',
					img: '/img/peer.jpeg',
					imgStyle:'background-size: 120%;',
					imgMdStyle:'',
					namePercent: 78,
					sex: 'Female',
					sexPercent: 72,
					verified: true,
					birth: 'carl@veridu.com',
					birthPercent: 59
				},
				{
					hours: 2063,
					hoursPercent: 58,
					name: 'James Winston',
					img: '/img/candidate.jpeg',
					imgStyle:'background-size: 120%;',
					imgMdStyle:'',
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
					name: 'Charlize Bush',
					img: '/img/tenant.jpg',
					namePercent: 80,
					imgStyle:'background-size: 120%;',
					imgMdStyle:'',
					sex: 'Female',
					sexPercent: 72,
					verified: true,
					birth: 'carl@veridu.com',
					birthPercent: 89
				},
			];
		}

		function auth(service) {
			var username = Auth.username;

			switch (service) {

				case 'document':
					Veridu.Widget.document_widget(username);
					break;

				case 'spotafriend':
					Veridu.Widget.kba_widget(username, service);
					break;

				case 'sms':
				case 'email':
					Veridu.Widget.otp_widget(username, service);
					break;

				case 'cpr':
					Veridu.Widget.cpr_widget(username);
					break;

				case 'nemid':
					if (parent.jQuery)
						parent.jQuery(parent.document).trigger(
							'VeriduEvent',
							{
								eventname: 'NemID',
								user: username
							}
						);
					else
						Veridu.Widget.nemid_widget(username);
					break;

				case 'personal':
					Veridu.Widget.personal(username);
					break;

				default:
					Veridu.Widget.provider_login(username, service);
			}

			return true;
		}
	}

	$('.page-loading').fadeOut();

})($,WOW);
