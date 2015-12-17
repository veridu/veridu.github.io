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

	var fixed_header = document.querySelector('.fixed-header');
	var header  =	document.querySelector('.header')

	window.onscroll = function function_name () {

		var header_size  = header.offsetHeight;
		var scrolled 	 = document.documentElement.scrollTop || document.body.scrollTop ;

		//will show
		if ( scrolled > header_size ){

			if (fixed_header.style.display != 'block'){

				fixed_header.style.display =  'block';
		
			} 

		} else{ //will hide

			if (fixed_header.style.display != 'none'){

				fixed_header.style.display =  'none';

			} 
		} 
	}


})($,WOW);