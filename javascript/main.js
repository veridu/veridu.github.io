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
				type,
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
		if ($integrationHeader[0]) {
			$integrationHeader[0].addEventListener('click', stopPropagation);
			$integrationHeader[0].addEventListener('contextmenu', stopPropagation);
			$nav[0].addEventListener('click', stopPropagation);
			$nav[0].addEventListener('contextmenu', stopPropagation);
		}

		// hides try-it on window click
		$window.click(function (evt) {
			hideTryIt();
			if (evt.target.className == 'v-modal__content') {

				closeModal();
			}
		});

		$window.resize(function () {
			$('.v-modal__dialog').css('max-height', $window.height() * 0.8);
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

		// google-material inputs

		$('.material-input-container input')
			.focus(function () {
				$(this).parent().addClass('focused');
			})
			.blur(function () {
				$(this).parent().removeClass('focused');
			});
		$('.material-input-container textarea')
			.focus(function () {
				$(this).parent().addClass('focused');
			})
			.blur(function () {
				$(this).parent().removeClass('focused');
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
				closeModal();
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

	AppCtrl.$inject = ['$scope', 'Widget', 'Auth', '$compile', '$filter', '$http', 'cfg', '$window'];
	function AppCtrl ($scope, Widget, Auth, $compile, $filter, $http, cfg, $window) {
		var vm = this;

		vm.partnerIndex = 0;
		vm.cfg = cfg;
		vm.Widget = Widget;
		vm.auth = auth;
		vm.identified = false;
		vm.createAccount = createAccount;
		vm.requestVerification = requestVerification;
		vm.getHighestScoreAttribute = getHighestScoreAttribute;
		vm.skipVerification = skipVerification;
		vm.showCreateAccount = showCreateAccount;
		vm.setItem = setItem;
		vm.getItem = getItem;
		vm.shareProfile = shareProfile;
		vm.pushTagsToDrip = pushTagsToDrip;
		vm.submits = {};

		function pushTagsToDrip(tags) {
			_dcq.push(["identify", {
				email: vm.Widget.user.email.value,
				tags
			}]);
		}

		function setItem(key, value) {
			$window.localStorage.setItem(key, JSON.stringify(value));
		}

		function shareProfile() {
			var url = window.location.host + '/share-profile.html?hours_to_fake='+ $filter('number')(vm.Widget.hoursToFake, 0) + '&profile_picture=' + vm.Widget.user.picture;
			window.open("https://www.facebook.com/sharer/sharer.php?u=" + url, "facebook-share", "width=580,height=296")
		}

		function getItem(key) {
			try {
				return JSON.parse($window.localStorage.getItem(key));
			} catch (e) {
				$window.removeItem(key);
				return null;
			}
		}

		init();

		function getHighestScoreAttribute(arr) {
			var index = -1, score = 0;
			if (! arr)
				return '';

			arr.map(function (item, i) {
				if (parseFloat(item.score) > parseFloat(score)) {
					score = item.score;
					index = i;
				}
			});
			return arr.length ? arr[index].value : '';
		}

		vm.account = {};

		$scope.$watch('App.Widget.user', function (user, pastUser) {
			if (user) {
				vm.user = user;

				if (! vm.account.email) {
					vm.account = {
						name: user.name.value,
						email: user.email.value
					}
				}

				var details = vm.Widget.raw.details;

				if (! vm.identified) {
					goal('try-it');
					vm.identified = true;

					vm.userInfo = {
						first_name: getHighestScoreAttribute(details.firstName),
						last_name: getHighestScoreAttribute(details.lastName),
						country: getHighestScoreAttribute(details.countryName),
						job_title: getHighestScoreAttribute(details.currentWorkPosition),
						profile_picture: getHighestScoreAttribute(details.profilePicture),
						email: getHighestScoreAttribute(details.emailAddress),
						company_name: getHighestScoreAttribute(details.currentEmployer),
						phone: vm.Widget.raw.user.phone && vm.Widget.raw.user.phone.value,
						time_to_fake: vm.Widget.hoursToFake && $filter('number')(vm.Widget.hoursToFake, 0),
						tags: ['tried_it']
					};
					_dcq.push(["identify", vm.userInfo]);

				} else {
					vm.userInfo.new_email = getHighestScoreAttribute(details.emailAddress);
					vm.userInfo.time_to_fake = vm.Widget.hoursToFake && $filter('number')(vm.Widget.hoursToFake, 0);

					if (details.emailAddress.length > 1) {
						details.emailAddress.map(function (email) {
							if (email.value != vm.userInfo.new_email)
								vm.userInfo.secondary_email = email.value;
						});
					}
					_dcq.push(["identify", vm.userInfo]);
				}

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
			vm.cfg.session = vm.getItem('Veridu_Session');
			vm.cfg.user = vm.getItem('Veridu_User');

			// attach events
			window.addEventListener('Veridu_SSO', function (evt) {
				vm.cfg.user = evt.veridu.id;
				vm.cfg.session = evt.veridu.session;
				vm.setItem('Veridu_User', vm.cfg.user);
				vm.setItem('Veridu_Session', vm.cfg.session);
				initVeridu();
			});

			initVeridu();
		}

		function initVeridu() {
			vm.Veridu = new Veridu(vm.cfg);
			vm.Veridu.API.fetch('GET', 'credential')
				.then(
					function success(response) {
						if (! $scope.$$phase) {
							$scope.$apply(function () {
								vm.connected = true;
								vm.Widget.init($scope, vm.Veridu, vm.cfg, true);
								vm.Veridu = new Veridu(vm.cfg);
							});
						} else {
							vm.connected = true;
							vm.Widget.init($scope, vm.Veridu, vm.cfg, true);
							vm.Veridu = new Veridu(vm.cfg);
						}
					},
					function error(response) {
						if (! $scope.$$phase) {
							$scope.$apply(function () {
								setVars();
							});
						} else {
							setVars();
						}

						function setVars() {
							window.localStorage.removeItem('Veridu_User');
							window.localStorage.removeItem('Veridu_Session');
							delete vm.cfg.user;
							delete vm.cfg.session;
							vm.Veridu = new Veridu(vm.cfg);
						}

					}
				)
		}

		function auth(service) {
			vm.loading = service;
			if (vm.connected) {
				vm.Veridu.Widget.provider_login(vm.cfg.user, service);
			} else {
				var url = vm.Veridu.SSO.provider_login(service, 'https://www.veridu.com/templates/sso.html', 'nonce');
				url = url.replace(/session.*/, 'session&');
				var win = window.open(url, 'sso', "width=500,height=500");
			}

			return true;
		}

		function requestVerification() {
			vm.errors.guest_name = (! vm.invite.name || ! vm.invite.name.length);
			vm.errors.guest_email = (! vm.invite.email || ! vm.invite.email.length);
			if (vm.errors.guest_email  || vm.errors.guest_name)
				return;

			vm.submits.requestVerification = true;
			$http.post('https://dashboard.veridu.com/website/verify',{
				guest_name: vm.invite.name,
				guest_email: vm.invite.email,
				message: vm.invite.text,
				show_profile: !! vm.invite.profile,
				first_name: getHighestScoreAttribute(vm.Widget.raw.details.firstName),
				profile_picture: vm.Widget.user.picture,
				api_key: vm.invite.api_key,
				Veridu_Session: vm.cfg.session,
				time_to_fake: $filter('number')(vm.Widget.hoursToFake, 0)
			}).then(function () {
				vm.submits.requestVerification = false;
				vm.pushTagsToDrip(['invited_friends_from_tryit']);

			} , function () {
				vm.submits.requestVerification = false;
			});

			finishCreateAccount('Verification requested');
		}

		function skipVerification() {
			finishCreateAccount('Request verification');
		}

		function finishCreateAccount(h4Text) {
			var state2 = $('.state--verify-others');

			if (h4Text)
				state2.find('h4').html("<span>"+ h4Text +"</span>");

			state2.find('.hidden-disabled').slideUp();
			state2.css('margin-top', '73px');
			state2.find('.take-me-to-account').slideDown();
			$('.try-it__create-account__steps__step--2').addClass('step--disabled');
		}

		function showCreateAccount(h4Text) {
			var state2 = $('.state--verify-others');
			state2.find('h4').html('<span style="display: none;">Who else do you want to verify? (optional)</span><span style="display: inline;" class="hidden-disabled">Test us out on someone else</span>');

			state2.find('.hidden-disabled').slideDown();
			state2.css('margin-top', '60px');
			state2.find('.take-me-to-account').slideUp();
			$('.try-it__create-account__steps__step--2').removeClass('step--disabled');
			vm.invite.name = '';
			vm.invite.email = '';
		}

		vm.errors = {};
		function createAccount() {
			// validation
			if (! vm.account.personal  && (! vm.account.company || vm.account.company == '') ) {
				vm.errors.personal_account = true;
				return;
			}

			// ui updates
			var state1 = $('.state--create-account');
			var state2 = $('.state--verify-others');
			var step1 = $('.try-it__create-account__steps__step--1');
			var step2 = $('.try-it__create-account__steps__step--2');
			var stepContainer = $('.try-it__create-account__steps');

			stepContainer.addClass('second-step');
			state1.addClass('state--disabled');

			state2.find('h4').css('margin-bottom', '0');
			state2.find('h4 p').remove();
			state2.find('h4 span').toggle();
			state2.removeClass('state--disabled');
			step2.removeClass('step--disabled');
			step1.addClass('step--disabled');

			$('#invite-name').focus();

			var companyName = vm.account.personal ? undefined : vm.account.company;
			// create a dashboard account
			$http.post('https://dashboard.veridu.com/website/account', {
				session: vm.cfg.session,
				client: vm.cfg.client,
				username: vm.cfg.username,
				company_name: companyName,
				name: vm.Widget.user.name.value,
				email: vm.Widget.user.email.value

			})
			.then(function (response) {
				vm.invite.api_key = response.data.api_key;
				if (response.data.new_account) {
					state1.find('h4').text('Make account (complete)');
				} else {
					state1.find('h4').text('Account found');
				}
			},
			function (e) {
				console.error(e);
			});

			// send info to drip
			vm.userInfo.tags = ['liked_it'];
			vm.userInfo.name = vm.account.name;
			vm.userInfo.account_name = vm.account.company;
			vm.userInfo.personal_account = !! vm.account.personal;
			vm.userInfo.connected_accounts = vm.Widget.raw.provider;

			_dcq.push(["identify", vm.userInfo]);

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

window.goal = function (label) {
	switch (label) {
		case 'contact-us':
			ga('send', 'event', 'goal', 'contact-us', 'Contact us', 1);
			break;
		case 'try-it':
			ga('send', 'event', 'goal', 'Authenticated via Try it', 'try-it', 1);
		break;
		case 'newsletter':
			ga('send', 'event', 'goal', 'Subscribed to newsletter', 'newsletter', 1);
		break;
		case 'account-created':
			ga('send', 'event', 'goal', 'Created account', 'created-account', 1);
		break;
		default:
		break;
	}
}

window.closeModal = function () {
	var vModals = $('.v-modal');

	if (vModals.hasClass('vis')) {
		vModals.removeClass('vis');
		vModals.addClass('inv');
		setTimeout(function () {
			vModals.removeClass('inv');
		}, 500);
		$('body').css('overflow', 'auto');
	}
}

window.showModal = function (id) {
	$('body').css('overflow', 'hidden');
	$('#' + id).addClass('vis');
}
