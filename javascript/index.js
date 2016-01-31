function indexLoad() {

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
		page.landingItems = $('#landing-carousel > div');
		page.sliderProgressCt = $('.slider-progress-container');
		page.landingCards =  $('.md-cards');
		page.menu = $('.menu');
		page.$window = $(window);
		page.mbHelper =  $('#mobile-indicator');
		page.mobile = page.mbHelper.is(':visible');
		initVideo();

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
			var landingHeight = page.$window.height();
			// minimum height of the landing content for the contents to fit
			// if (landingHeight < 850)
				// landingHeight = 850;

			if (! page.mobile) {
				page.landingSection.css('height', page.$window.height() * 2/3);
				page.landingItems.css('height', (landingHeight * 6/12) - 50);
			} else {
				page.landingSection.css('height', 480);
				page.landingItems.css('height', 430);
			}

		}
	}


	function initVideo() {
		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	}

	// 3. This function creates an <iframe> (and YouTube player)
	//    after the API code downloads.
	function onYouTubeIframeAPIReady() {

	    ytPlayer = new YT.Player('youtube-player', {
	        width: '350',
	        height: '180',
	        videoId: 'II1_oO_ULNo',
	        thumbnailId: 2,
	        events: {
	            'onReady': onPlayerReady,
	            'onStateChange': onPlayerStateChange
	        }
	    });
	    }

	    // 4. The API will call this function when the video player is ready.
	    var playButton = document.getElementById('play-button');

	    function onPlayerReady(event) {

	        ytPlayer = event.target;
	        playButton.addEventListener('click', playVideo);
	    }


	    // 5. The API calls this function when the player's state changes.
	    //    The function indicates that when playing a video (state=1),
	    //    the player should play for six seconds and then stop.
	    var done = false;
	    function onPlayerStateChange(event) {

	        if (event.data == YT.PlayerState.PLAYING ) {
	            // hide button
	            playButton.style.display = 'none';

	        } else {
	            // show button
	            playButton.style.display = 'inline-block';
	        }

	    }
	    function stopVideo() {
	        ytPlayer.stopVideo();
	    }
	    function playVideo() {
	        ytPlayer.playVideo();
	    }


}

document.addEventListener('DOMContentLoaded', indexLoad);
