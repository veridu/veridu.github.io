(function ($, WoW) {
	
	// initializes
	(new WoW).init();
	
	var menuToggler  = $('#menu-toggler');
	var dropdownMenu = $('.dropdown-menu');

	menuToggler
		.click(toggleMenu);

	function toggleMenu (e) {
		if (dropdownMenu.hasClass('visible')) {
			dropdownMenu.removeClass('visible');
		} else {
			dropdownMenu.addClass('visible');
		}
	}

})($,WOW);