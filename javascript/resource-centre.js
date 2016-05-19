(function() {
	'use strict';

	function load () {
		var vm = {};

		$('.media-list--video button').click(function (evt) {
			var player,
				id = $(this).data('iframe-id');

			if (id) {
				player = players[id];
				showVideo(id);
			}
		});

		// Inject YouTube API script
		var tag = document.createElement('script');
		tag.src = "//www.youtube.com/player_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		$('#introduction-button').click(function () {
			showVideo('video-intro');
		});

		function showVideo(id) {
			pushToDrip('Clicked to watch video on Resource Centre #' + id);
            loadedVideo();

            function loadedVideo() {
                if (typeof players[id].playVideo === 'function') {
                    finish();
                } else {
                    setTimeout(loadedVideo, 500);
                }
            }

            function finish() {
                $('.video-overlay').fadeIn();
    			$('.video-overlay').css('display', 'table');
    			$('#' + id).show();
    			vm.playing = id;

    			if (players[id].api) {
    				players[id].api('play');
    			} else {
                    if (typeof players[id].playVideo === 'function') {
                        players[id].playVideo();
                    }
    			}
            }

		}

		window.hideVideo = hideVideo;
		window.addEventListener('keydown', function (evt) {
			if (vm.playing && evt.keyCode === 27) {
                hideVideo();
            }
		});

		window.addEventListener('click', function (evt) {
			if (evt.target.className === 'video-overlay__content') {
				hideVideo();
			}
		});

		function hideVideo() {
			$('#' + vm.playing).hide();
			$('.video-overlay').fadeOut(function () {
				if (players[vm.playing]) {
					if (players[vm.playing].api) {
                        players[vm.playing].api('pause');
                    } else {
                        players[vm.playing].pauseVideo();
                    }

					delete vm.playing;
				}
			});
		}
	}

	document.addEventListener('DOMContentLoaded', load);
}());

var players = {}, ids = [];

function onYouTubePlayerAPIReady() {
	var iframes = $('.video-overlay__content iframe');

    if (iframes.length == 1)
        setTimeout(onYouTubePlayerAPIReady, 500);

	for (var i = 0; i < iframes.length; i++) {
		var id = iframes[i].id;
		players[id] = new YT.Player(id, {
				events: {
				  'onReady': onPlayerReady
				}
			});
	}
}

function onPlayerReady(event) {
}

// Vimeo API library
var Froogaloop=function(){function e(a){return new e.fn.init(a)}function g(a,c,b){if(!b.contentWindow.postMessage)return!1;a=JSON.stringify({method:a,value:c});b.contentWindow.postMessage(a,h)}function l(a){var c,b;try{c=JSON.parse(a.data),b=c.event||c.method}catch(e){}"ready"!=b||k||(k=!0);if(!/^https?:\/\/player.vimeo.com/.test(a.origin))return!1;"*"===h&&(h=a.origin);a=c.value;var m=c.data,f=""===f?null:c.player_id;c=f?d[f][b]:d[b];b=[];if(!c)return!1;void 0!==a&&b.push(a);m&&b.push(m);f&&b.push(f);
return 0<b.length?c.apply(null,b):c.call()}function n(a,c,b){b?(d[b]||(d[b]={}),d[b][a]=c):d[a]=c}var d={},k=!1,h="*";e.fn=e.prototype={element:null,init:function(a){"string"===typeof a&&(a=document.getElementById(a));this.element=a;return this},api:function(a,c){if(!this.element||!a)return!1;var b=this.element,d=""!==b.id?b.id:null,e=c&&c.constructor&&c.call&&c.apply?null:c,f=c&&c.constructor&&c.call&&c.apply?c:null;f&&n(a,f,d);g(a,e,b);return this},addEvent:function(a,c){if(!this.element)return!1;
var b=this.element,d=""!==b.id?b.id:null;n(a,c,d);"ready"!=a?g("addEventListener",a,b):"ready"==a&&k&&c.call(null,d);return this},removeEvent:function(a){if(!this.element)return!1;var c=this.element,b=""!==c.id?c.id:null;a:{if(b&&d[b]){if(!d[b][a]){b=!1;break a}d[b][a]=null}else{if(!d[a]){b=!1;break a}d[a]=null}b=!0}"ready"!=a&&b&&g("removeEventListener",a,c)}};e.fn.init.prototype=e.fn;window.addEventListener?window.addEventListener("message",l,!1):window.attachEvent("onmessage",l);return window.Froogaloop=
window.$f=e}();
var iframe = document.getElementById('video-2');
players['video-2'] = $f(iframe);
