(function ($, WoW) {

	// initializes

	var menuToggler  = $('#menu-toggler');
	var $window = $(window);
	var dropdownMenu = $('.dropdown-menu');

	$('.btn')
		.mouseenter(function () {
			var $this = $(this);
			$this.height($this.height());
		});


	// Fixed email form

	// fixed contact elementsC
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
				// hides input
				fixedContactContainer.find('.text-danger').hide();
				fixedContactContainer.toggleClass('active');
				fixedContactButton.find('.hideable').toggleClass('animated fadeOut');
				fixedContactButton.addClass('sent');
				fixedContactContainer.find('.thank-you').toggleClass('animated fadeIn');
				// sends e-mail
				this.submit();

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
		dropdownMenu.removeClass('visible');
	}

	// sets landing height to 100%
	var landingHeight = $(window).height() -  $('.menu').height();
	var landingSection = $('.landing-section');
	var sliderProgressCt = $('.slider-progress-container');
	var landingCards =  $('.md-cards');
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

	$(".solutions-submenu a")
		.click(handleClickToHash);

	$(".pricing-submenu a")
		.click(handleClickToHash);

	$(".dropdown-menu a")
		.click(handleClickToHash);

	$("#footer-solutions a")
		.click(handleClickToHash);

	// handles submenu clicks
	function handleClickToHash(event) {

		var id = $(this).attr('data-scrollTo');
		if (id) {
			event.preventDefault();
			var sectionName = id.replace('#','');

			if (mobile && sectionName == 'integration') {
				id = "#integration-section";
			}

			$('#solutions-curent-position').html(this.innerHTML);
			$('#pricing-curent-position').html(this.innerHTML);

			scrollToHash(id, 500, mobile);
		}
	}

	function scrollToHash (hash, speed, mobile) {

		var overrideOffsets =  {
			'#integration-section' : 20,
			'#what-you-get-section' : 0,
			'#low-cost' : 0
		};

		var offset = overrideOffsets[hash];

		if (offset !== undefined)
			var _off  = offset;
		else
			var _off = mobile ? 240 : 280;

		if (! speed) speed = 500;
		if (hash == '#integration-section') {
			_off = 20;
		}

		$('html, body').animate({
			scrollTop: ($(hash).offset().top - _off)
		}, speed);
	}

	// controllers

	angular.module('app').controller('AppCtrl', AppCtrl);
	ContactCtrl.$inject = ['$scope'];
	function ContactCtrl ($scope) {

		var vm = this;
		vm.contact = {};

		vm.sendContact = sendContact;

		function sendContact () {
			$.ajax({
				type: 'POST',
				url: 'https://mandrillapp.com/api/1.0/messages/send.json',
				data: {
					'key': 'aWW0R-modIT7wxtqmWKMGA',
					'message': {
						'from_email': 'website@veridu.com',
						'to': [
							{
								'email': 'marketing@veridu.com',
								'name': 'Marketing',
								'type': 'to'
							}
						],
						'autotext': 'true',
						'subject': 'Contact from website | veridu.com',
						'html': 'Name: <strong>' + vm.contact.name + '<strong><br>' +
								'Email: <strong>' + vm.contact.email + '<strong><br>' +
								'Company: <strong>' + vm.contact.company + '<strong><br>' +
								'<br> Message: <br> <strong>' + vm.contact.message + '<strong><br>'
					}
				}
				}).done(function(response) {
					console.log(response); // if you're into that sorta thing
				});

		}

	}

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
		vm.currentLandingState = 'customer';
		vm.playSlider = true;

		$(".landing-section").on("swiperight", nextSlide);
		$(".landing-section").on("swipeleft", prevSlide);

		init();

		// menu border
		(function  () {
			var fixed_header = $('nav.nav');

			window.addEventListener('scroll', function () {
				var scrolled = document.documentElement.scrollTop || document.body.scrollTop ;
				if (scrolled > 1){
					//will show
					fixed_header.addClass('shadowed');
					fixedContactContainer.css('display', 'table');

					if (scrolled > $(window).height() - 150) {
						// scrolled after landing -- stops slider
						vm.playSlider = false;
					} else {
						vm.playSlider = true;
					}

				} else{
					//will hide
					fixed_header.removeClass('shadowed');

				}
			})
		})();

		function togleSignin() {
			vm.showSignin = ! vm.showSignin;
		}

		function nextSlide() {
			if (! vm.playSlider)
				return;

			if (vm.slider.index == (vm.slider.length - 1)) {
				vm.slider.index = 0;
			} else {
				vm.slider.index++;
			}
		}

		function prevSlide() {
			if (! vm.playSlider)
				return;

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
				vm.partnerIndex = vm.partnerIndex - 1;
			}
		}

		$scope.$watch('App.Widget.user', function (user, pastUser) {
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
						namePercent: (user.name || 0 ) && Math.round((user.name.score * 100) * 10) / 10,
						img: user.picture || 'http://placehold.it/1000?text=Your%20Picture',
						imgStyle: 'background-size: 150%; background-position: 50% !important',
						imgMdStyle: '',
						sex: user.gender.value,
						sexPercent: (user.gender || 0 ) && Math.round((user.gender.score * 100) * 10) / 10,
						verified: user.overall > 0.6,
						birth: user.email.value,
						birthPercent: (user.email || 0 ) && Math.round((user.email.score * 100) * 10) / 10
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

			vm.videos = {
				'customer': document.getElementById('video-customer'),
				'peer': document.getElementById('video-peer'),
				'candidate': document.getElementById('video-candidate'),
				'tenant': document.getElementById('video-tenant')
			};

			$scope.$watch('App.slider.index' , function (value) {
				if (value !== undefined) {

					vm.partnerIndex = value;
					var lastIndex = value == 0 ? 3 : value -1;
					var lastState = vm.mainSliderStates[lastIndex];
					vm.currentLandingState = vm.mainSliderStates[value];
					clearInterval(vm.carouselInterval);
					vm.carouselInterval = setInterval(moveCarousel, 8000);

					if (!mobile && vm.videos[vm.currentLandingState]) {
						vm.videos[vm.currentLandingState].play();
						vm.videos[lastState].pause();
					}
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
			vm.activeContentInterval = setInterval(checkActiveContent, 1000);

			function checkActiveContent() {

				if (landingActiveContent.find('*:hover').length || landingCards.find('*:hover').length) {
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
					name: 'Jonathan Walsh',
					namePercent: 58,
					img: 'img/customer.jpeg',
					imgStyle:'background-size: auto',
					imgMdStyle: '',
					sex: 'Male',
					sexPercent: 62,
					verified: false,
					birth: 'jon@veridu.com',
					birthPercent: 89
				},
				{
					hours: 2563,
					hoursPercent: 78,
					name: 'Lucy Mormum',
					img: 'img/peer.jpeg',
					imgStyle:'background-size: auto',
					imgMdStyle:'',
					namePercent: 78,
					sex: 'Female',
					sexPercent: 72,
					verified: true,
					birth: 'lucy@veridu.com',
					birthPercent: 59
				},
				{
					hours: 2063,
					hoursPercent: 58,
					name: 'James Winston',
					img: 'img/candidate.jpeg',
					imgStyle:'background-size: auto',
					imgMdStyle:'',
					namePercent: 68,
					sex: 'Works at Veridu Ltd.',
					sexPercent: 72,
					verified: false,
					birth: 'james@veridu.com',
					birthPercent: 39
				},
				{
					hours: 3563,
					hoursPercent: 82,
					name: 'Charlize Bush',
					img: 'img/tenant.jpg',
					namePercent: 80,
					imgStyle:'background-size: auto',
					imgMdStyle:'',
					sex: 'Female',
					sexPercent: 72,
					verified: true,
					birth: 'charlize@veridu.com',
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
	(new WoW).init();

})($,WOW);

// globals

window.getDocHeight =  function (){
	var D = document;
	return Math.max(
		D.body.scrollHeight, D.documentElement.scrollHeight,
		D.body.offsetHeight, D.documentElement.offsetHeight,
		D.body.clientHeight, D.documentElement.clientHeight
	);
}