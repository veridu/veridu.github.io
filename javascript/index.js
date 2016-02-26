(function () {

	var page = this;
	var landingActiveContent = $('.landing-active-content');

	init();

	function init() {
		page.landingSection = $('.new-landing-section');
		page.landingItems = $('#landing-carousel .v-item');
		page.$window = $(window);
		page.mbHelper =  $('#mobile-indicator');
		page.mobile = page.mbHelper.is(':visible');

		page.$window.resize(adjustHeights);
		page.$window.scroll(detect);
		page.played = {};

		adjustHeights();

		var $onboardVideo = $('.playOnScroll.onboard-customers'),
			$authVideoCt = $('section.authenticate-identity .content'),
			$authVideo = $('.playOnScroll.authenticate-identity'),
			$doitVideoCt = $('section.do-it-your-way .content'),
			$doitVideo = $('.playOnScroll.do-it-your-way'),
			$quickerVideoCt = $('section.accept-transactions .content'),
			$quickerVideo = $('.playOnScroll.quicker-decisions');

		detect();
		function detect() {
			var scrollBot = $window.scrollTop()  + $window.height();
			playIfOnViewport();
		}

		function playIfOnViewport() {
			// check if is on viewport then play once
			if ($onboardVideo.visible() && ! page.played.onboard) {
				$onboardVideo[0].play();
				page.played.onboard = true;
			}

			if ($doitVideoCt.visible() && ! page.played.doit) {
				$doitVideo[0].play();
				page.played.doit = true;
			}

			if ($authVideoCt.visible() && ! page.played.auth) {
				$authVideo[0].play();
				page.played.auth = true;
			}

			if ($quickerVideoCt.visible() && ! page.played.quick) {
				$quickerVideo[0].play();
				page.played.quick = true;
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
				page.landingItems.css('height', landingHeight);
			} else {
				page.landingSection.css('height', 480);
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

function fixSectionBgColor(videoId, sectionId) {
    var video = document.getElementById(videoId);
	var sx, sy, sw, sh;
    var bufferCanvas = document.getElementById("bufferCanvas");
    var displayCanvas = document.getElementById("displayCanvas");
    var buffer = bufferCanvas.getContext("2d");
    var display = displayCanvas.getContext("2d");

    buffer.drawImage(video, 0,0, bufferCanvas.width, displayCanvas.height);

    var frame = buffer.getImageData(sx, sy, sw, sh);
    var length = frame.data.length / 4;

    for (var i = 0; i < length; i++) {
        var r = frame.data[i * 4 + 0];
        var g = frame.data[i * 4 + 1];
        var b = frame.data[i * 4 + 2];
        console.warn(r,g,b);
    }

    display.putImageData(frame, 0, 0);

    setTimeout(processFrame, 0);
}
