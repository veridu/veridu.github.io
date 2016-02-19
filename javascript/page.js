(function() {
	'use strict';

	function load () {

		var vm = this;

		vm.$window = $(window);
		vm.$container = $('.page__cover-container');
		vm.$cover = $('.page__cover');
		vm.coverHeight = vm.$window.height() -  $('.menu').height();
		vm.mbHelper =  $('#mobile-indicator');

		vm.$window.resize(adjustHeights);
		adjustHeights();

		function adjustHeights() {
			vm.mobile = vm.mbHelper.is(':visible');
			var coverHeight = vm.$window.height() * 2/3;
			// minimum height of the landing content for the contents to fit
			if (coverHeight < 610)
				coverHeight = 610;

			if (! vm.mobile) {
				vm.$container.css('height', coverHeight);
				vm.$cover.css('height', coverHeight);
			} else {
				vm.$container.css('height', 480);
				vm.$cover.css('height', 480);
			}

		}
	}

	document.addEventListener('DOMContentLoaded', load);
}());
