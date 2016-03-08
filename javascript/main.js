// visible function
!function(t){var i=t(window);t.fn.visible=function(t,e,o){if(!(this.length<1)){var r=this.length>1?this.eq(0):this,n=r.get(0),f=i.width(),h=i.height(),o=o?o:"both",l=e===!0?n.offsetWidth*n.offsetHeight:!0;if("function"==typeof n.getBoundingClientRect){var g=n.getBoundingClientRect(),u=g.top>=0&&g.top<h,s=g.bottom>0&&g.bottom<=h,c=g.left>=0&&g.left<f,a=g.right>0&&g.right<=f,v=t?u||s:u&&s,b=t?c||a:c&&a;if("both"===o)return l&&v&&b;if("vertical"===o)return l&&v;if("horizontal"===o)return l&&b}else{var d=i.scrollTop(),p=d+h,w=i.scrollLeft(),m=w+f,y=r.offset(),z=y.top,B=z+r.height(),C=y.left,R=C+r.width(),j=t===!0?B:z,q=t===!0?z:B,H=t===!0?R:C,L=t===!0?C:R;if("both"===o)return!!l&&p>=q&&j>=d&&m>=L&&H>=w;if("vertical"===o)return!!l&&p>=q&&j>=d;if("horizontal"===o)return!!l&&m>=L&&H>=w}}}}(jQuery);

// globals
window.getDocHeight =  function (){
	var D = document;
	return Math.max(
		D.body.scrollHeight, D.documentElement.scrollHeight,
		D.body.offsetHeight, D.documentElement.offsetHeight,
		D.body.clientHeight, D.documentElement.clientHeight
	);
}

window.scrollToHash = function (hash, speed, offset) {

	var offset = offset || 53;
	var speed = speed || 500;
	var el = document.getElementById(hash);

	if (el) {
		$('html, body').animate({
			scrollTop: ($(el).offset().top - offset)
		}, speed);
	}

}

// useful globals
window.pushToDrip = function (eventLabel, type) {
	type = type || 'track';
	if (typeof(_dcq) !== 'undefined') {
		_dcq.push(
			[
				"track",
				eventLabel,
				{
					value: 2000
				}
			]
		);
	}
}

window.$window = $(window);
window.mbHelper = $('#mobile-indicator');

window.adjustHeights = function($el) {
	var coverHeight = $window.height() * 2/3;
	if (typeof($el.css) == 'function')
		return (window.mbHelper.is('visible')) ? $el.css('height', Math.max(coverHeight, 380)) : $el.css('height', Math.max(coverHeight, 610));

	return false;
};

(function ($) {

	// initializes
	var menuToggler  = $('#menu-toggler');
	var dropdownMenu = $('.dropdown-menu');
	var $nav = $('nav.nav');
	var $integrationHeader = $('header .integration-container');
	var fixed_header = $('nav.nav');

	// Fixed email form
	var fixedContactForm = $('#fixed-contact-form');
	var fixedContactContainer = $('.fixed-contact__container');
	var fixedContactButton = $('#fixed-contact__button');
	var fixedContactLabel = $('.fixed-contact__label');
	var fixedContactInput = $('.fixed-contact__container input');
	var landingActiveContent = $('.landing-active-content');

	var landingHeight = $(window).height() -  $('.menu').height();
	var landingSection = $('div.landing-section');
	var sliderProgressCt = $('.slider-progress-container');
	var landingCards =  $('.md-cards');
	var menu = $('.menu');
	var $window = $(window);
	var mbHelper =  $('#mobile-indicator');
	var mobile = mbHelper.is(':visible');

	function stopPropagation(evt) { evt.stopPropagation(); return false; }

	attachEvents();
	function attachEvents() {
		// stops propagation
		$integrationHeader[0].addEventListener('click', stopPropagation);
		$integrationHeader[0].addEventListener('contextmenu', stopPropagation);
		$nav[0].addEventListener('click', stopPropagation);
		$nav[0].addEventListener('contextmenu', stopPropagation);

		// hides try-it on window click
		$window.click(function () {
			hideTryIt();
		});

		// menu shadow
		window.addEventListener('scroll', function addShadow() {
			var scrolled = document.documentElement.scrollTop || document.body.scrollTop ;
			if (scrolled > 1){
				fixed_header.addClass('shadowed');
				fixedContactContainer.css('display', 'table');
			} else
				fixed_header.removeClass('shadowed');
		});

		// try it toggler
		$('#try-it-toggler').click(function (evt) {
			stopPropagation(evt);
			return ($integrationHeader.hasClass('vis')) ? hideTryIt() : showTryIt();
		});
		fixedContactInput.focusout(function () {
			if (!fixedContactButton.is(':active')) {
				fixedContactContainer.removeClass('active');
			}
		});

		// hides on ESC
		window.$window.keydown(function(evt) {
			if (evt.keyCode == 27) {
				fixedContactContainer.removeClass('active');
			}
		});

		// Drip submit
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
					ga('send', 'event', 'Bottom-fixed Form', 'submit', 'Drip email form submitted');
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

		dropdownMenu.find('a').click(toggleMenu);

	}

	// try it toggle functions
	function hideTryIt() {
		if ($('li.try-it').hasClass('vis')) {
			$('li.try-it').removeClass('vis');
			fixed_header.removeClass('disabled-shadow');
			$integrationHeader.removeClass('vis');
			$integrationHeader.addClass('invis');
		}
	}

	window.hideTryIt = hideTryIt;


	function showTryIt() {
		$('li.try-it').addClass('vis');
		$integrationHeader.removeClass('invis');
		$integrationHeader.addClass('vis');
		fixed_header.addClass('disabled-shadow');
		pushToDrip('Clicked "Try it" button on the website header');
	}

	var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	// toggle menu functions
	function toggleMenu (e) {
		e.stopPropagation();
		if ($nav.hasClass('collapsed')) {
			$nav.css('height', $window.height() + 150);
		} else {
			$nav.css('height', '3.6em');
		}
		$nav.toggleClass('collapsed');
	}
	function openMenu() {
		dropdownMenu.addClass('visible');
	}

	function closeMenu() {
		dropdownMenu.removeClass('visible');
	}



	if (landingSection.length) {
		$window.resize(function () {
			adjustHeights(landingSection);
		});
		adjustHeights(landingSection);
	}

	// controllers
	angular.module('app').controller('AppCtrl', AppCtrl);
	ContactCtrl.$inject = ['$scope'];
	function ContactCtrl ($scope) {
		var vm = this;
	}

	AppCtrl.$inject = ['$scope', 'Widget', 'Auth', 'Veridu', '$compile'];
	function AppCtrl ($scope, Widget, Auth, Veridu, $compile) {
		var vm = this;

		vm.partnerIndex = 0;
		vm.Widget = Widget;
		vm.auth = auth;
		init();

		$scope.$watch('App.Widget.user', function (user, pastUser) {
			if (user) {
				vm.user = user;
				vm.mainSliderStates = ['customer'];
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
						birthPercent: Math.round(( ( (user.email && user.email.score) || user.overall) * 100) * 10) / 10
					}
				];
			} else {

			}
		}, true);

		function init () {
			vm.Widget.init($scope);
		}


		function auth(service) {
			vm.loading = service;
			var username = Auth.username;
			Veridu.Widget.provider_login(username, service);
			return true;
		}

	}
	$('#drip-contact-form').on('submit', function (event) {
		event.preventDefault();
		ga('send', 'event', 'Contact Form', 'submit', 'Drip contact form submitted');
		this.submit();
	});

	$('.page-loading').fadeOut();

})($);

function load() {
	window.removeEventListener('load', load, false);

	if (window.location.hash) {
		window.scrollToHash(window.location.hash.replace('#','') + '-wrapper');
	}
}
window.addEventListener('load', load, false);
