(function() {
	'use strict';

	function load () {

		var vm = this;

		vm.$window = $(window);
		vm.$container = $('.page__cover-container');
		vm.$cover = $('.page__cover');

		vm.$window.resize(function () {
			adjustHeights(vm.$cover);
			adjustHeights(vm.$container);
		});
		adjustHeights(vm.$cover);
		adjustHeights(vm.$container);

	}

	document.addEventListener('DOMContentLoaded', load);
}());
