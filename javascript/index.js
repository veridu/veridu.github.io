(function () {

	var page = this;
	var landingActiveContent = $('.landing-active-content');

	function hideVideo() {
	    $('.video-overlay').removeClass('vis');
	    ytPlayer.stopVideo();
	}

	function showVideo() {
	    $('.video-overlay').addClass('vis');
	    ytPlayer.playVideo();
	}

	init();

	function init() {
		// sets landing height to 100%
		page.landingHeight = $(window).height() -  $('.menu').height();
		page.landingSection = $('.new-landing-section');
		page.landingItems = $('#landing-carousel .v-item');
		page.landingTrack = $('#landing-carousel .slick-track');
		page.sliderProgressCt = $('.slider-progress-container');
		page.landingCards =  $('.md-cards');
		page.menu = $('.menu');
		page.$window = $(window);
		page.mbHelper =  $('#mobile-indicator');
		page.mobile = page.mbHelper.is(':visible');

		page.$window.resize(adjustHeights);
		adjustHeights();
		page.$window.keydown(keyPressed);

		function keyPressed(evt) {
			if (evt.keyCode == 27) {
				hideVideo();
			}
		}

		function adjustHeights() {
			page.mobile = page.mbHelper.is(':visible');
			var landingHeight = page.$window.height() * 2/3;
			var pageHeight = page.$window.height();
			// minimum height of the landing content for the contents to fit
			if (landingHeight < 610)
				landingHeight = 610;

			if (! page.mobile) {
				page.landingSection.css('height', landingHeight);
				page.landingTrack.css('height', landingHeight);
				page.landingItems.css('height',  landingHeight);
			} else {
				page.landingSection.css('height', 480);
				page.landingTrack.css('height', 480);
				page.landingItems.css('height', 480);
			}

		}
	}


		ctrl.$inject = ['$scope'];
		function ctrl($scope) {
			$scope.currentPlan = 0;

			$scope.nextPlan = function (){
				if (! mobile) return;
				var nextIndex = $scope.currentPlan < 2 ? $scope.currentPlan + 1 : 0;
				animate($scope.currentPlan, nextIndex, 'forward');
				$scope.currentPlan = nextIndex;
			}

			$scope.prevPlan = function (){
				if (! mobile) return;
				var nextIndex =  $scope.currentPlan > 0 ? $scope.currentPlan - 1 : 2;
				animate($scope.currentPlan, nextIndex, 'backwards');
				$scope.currentPlan = nextIndex;
			}

			$scope.showPlan = function (index) {
				if (! mobile) return;
				animate($scope.currentPlan, index, 'forward');
				$scope.currentPlan = index;
			}

			function animate(lastIndex, index, d) {
				var pId = '#plan-' + index;
				var lpId = '#plan-' + lastIndex;

				$('.plan-size').addClass('plan-size--not-active');
				$('.plan-size').removeClass('slideInRight fadeIn');
				$(pId).removeClass('plan-size--not-active');

				if (d == 'forward') {
					$(pId).addClass('slideInRight');
				} else {
					$(pId).addClass('zoomInLeft');
				}
			}


		}
		angular.module('app').controller('PricingCtrl', ctrl);
})();
