//generated 1459393044
var Veridu = (function ($) {
	'use strict';

	var config = {
		client: '',
		session: '',
		language: 'en-us',
		country: 'us',
		version: '0.3'
	};

	function Veridu(options) {
		config = $.extend(config, options);
		if (!config.client)
			Veridu.Common.log('Creating Veridu object with invalid client parameter! (' + config.client + ')', true);
		if (!config.session)
			Veridu.Common.log('Creating Veridu object with invalid session parameter! (' + config.session + ')', true);
	}

	Veridu.Version = {
	major: 0,
	minor: 1,
	revision: 4,
	build: '',
	stable: true,
	toString: function () {
		return Veridu.Version.major + '.' + Veridu.Version.minor + '.' + Veridu.Version.revision + Veridu.Version.build + (Veridu.Version.stable ? '-stable' : '-unstable');
	}
};


	Veridu.Common = (function () {
	var Common = {},
		URL = {
			widget: 'https://widget.veridu.com',
			assets: 'https://assets.veridu.com',
			api: 'https://api.veridu.com'
		};

	function build_url(url, query) {
		if (query) {
			if (url.indexOf('?') > -1)
				url += '&';
			else
				url += '?';
			if (typeof query == 'string')
				return url + query;
			return url + $.param(query);
		}
		return url;
	}

	Common.api_url = function (resource, query) {
		return build_url(URL.api + '/' + config.version + '/' + resource + '/', query);
	};

	Common.assets_url = function (resource, query) {
		return build_url(URL.assets + '/' + config.version + '/' + resource, query);
	};

	Common.widget_url = function (resource, query) {
		return build_url(URL.widget + '/' + config.version + '/' + resource + '/', query);
	};

	Common.show_iframe = function (container, url, retry) {
		$.ajax({
				crossDomain: true,
				dataType: 'html',
				timeout: 120000,
				type: 'GET',
				url: url
			})
			.done(function (html) {
				$(container).html('<iframe src="about:blank" width="100%" height="100%" frameborder="0" scrolling="auto" sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation" seamless="seamless"></iframe>');
				var target = $(container).find('iframe').contents()[0];
				target.open();
				target.write(html);
				target.close();
			})
			.fail(function () {
				if (retry)
					Common.show_iframe(container, url, false);
			});
	};

	Common.log = function (message, error) {
		if (window.console) {
			if (error)
				console.error(message);
			else
				console.log(message);
		}
	};

	return Common;
}());


	Veridu.API = (function () {
	var API = {};

	function ajax_cfg(method, url, data, type) {
		return {
			crossDomain: true,
			data: (data || {}),
			dataType: (type || 'json'),
			headers: {
				'Veridu-Client': config.client,
				'Veridu-Session': config.session
			},
			timeout: 120000,
			type: method,
			url: url
		};
	}

	function endpoint(resource, query) {
		if (resource.charAt(0) === '/')
			resource = resource.substr(1);
		return Veridu.Common.api_url(resource, query);
	}

	function error(obj) {
		return {
			type: 'AJAX_ERROR',
			message: (obj.responseText === '' ? 'Request failed' : obj.responseText)
		};
	}

	API.fetch = function (method, resource, parameters) {
		if (!resource) {
			Veridu.Common.log('Calling API.fetch with invalid resource parameter! (' + resource + ')', true);
			return;
		}
		switch (method) {
			case 'GET':
				var cfg = ajax_cfg(method, endpoint(resource, parameters));
				break;
			case 'POST':
			case 'PUT':
			case 'DELETE':
				var cfg = ajax_cfg(method, endpoint(resource), parameters);
				break;
			default:
				Veridu.Common.log('Calling API.fetch with invalid method parameter! (' + method + ')', true);
				return false;
		}
		var def = $.Deferred();
		$.ajax(cfg)
			.done(function (json) {
				if (json.status)
					def.resolve(json);
				else
					def.reject(json.error);
			})
			.fail(function (jqXHR) {
				try {
					var response = $.parseJSON(jqXHR.responseText);
					if (response.error)
						def.reject(response.error);
					else
						def.reject(error(jqXHR));
				} catch (exception) {
					def.reject(error(jqXHR));
				}
			});
		return def.promise();
	};

	API.batch = function (jobs) {
		if (typeof jobs !== 'object') {
			Veridu.Common.log('Calling API.batch with invalid jobs parameter! (' + jobs + ')', true);
			return;
		}
		for (var i = 0; i < jobs.length; i++) {
			if (typeof jobs[i] !== 'object') {
				Veridu.Common.log('Calling API.batch with invalid jobs parameter! (invalid type for job #' + i + ')', true);
				return;
			}
			if (!jobs[i].method) {
				Veridu.Common.log('Calling API.batch with invalid jobs parameter! (missing method parameter at job #' + i + ')', true);
				return;
			}
			if (!jobs[i].resource) {
				Veridu.Common.log('Calling API.batch with invalid jobs parameter! (missing resource parameter at job #' + i + ')', true);
				return;
			}
		}
		return API.fetch('POST', '/batch', {jobs: JSON.stringify(jobs)});
	};

	return API;
}());


	Veridu.Badge = (function () {
	var Badge = {};

	Badge.name = function (badge) {
		switch (badge) {
			case 'amazon':
			case 'document':
			case 'dropbox':
			case 'facebook':
			case 'google':
			case 'instagram':
			case 'spotify':
			case 'twitter':
			case 'password':
				return badge.charAt(0).toUpperCase() + badge.substr(1);
			case 'linkedin':
				return 'LinkedIn';
			case 'paypal':
				return 'PayPal';
			case 'email':
				return 'E-Mail';
			case 'nemid':
				return 'NemID';
			case 'cpr':
				return 'CPR Number';
			case 'sms':
				return 'SMS';
			case 'spotafriend':
				return 'Spot a Friend';
			case 'personal':
				return 'Personal Info';
			case 'yahoo':
				return 'Yahoo!';
			default:
				return 'Unknown';
		}
	};

	return Badge;
}());


	Veridu.Popup = (function () {
	var Popup = {},
		stack = [];

	function _display(popup, retry) {
		if (popup.display)
			return;
		popup.display = true;
		var $popup = $('#veridu-popup-' + popup.user);
		if ($popup.length)
			$popup
				.stop(true, true)
				.remove();
		$.ajax({
				crossDomain: true,
				dataType: 'html',
				timeout: 120000,
				type: 'GET',
				url: popup.url
			})
			.done(function (html) {
				var parent = $(popup.parent)[0].getBoundingClientRect(),
					container = '<div id="veridu-popup-' + popup.user + '" \
									style="border: 1px solid #ddd; \
										position: fixed; \
										width: ' + popup.width + 'px; \
										height: 0; \
										top: -1000px; \
										left: -1000px; \
										z-index: 10000" \
										data-parent-top="' + parent.top + '" \
										data-parent-left="' + parent.left + '" \
										data-parent-width="' + parent.width + '" \
										data-parent-height="' + parent.height + '"> \
									<iframe src="about:blank" width="100%" height="100%" frameborder="0" \
										sandbox="allow-same-origin allow-popups allow-scripts" seamless="seamless"></iframe> \
								</div>';
				$(container)
					.appendTo('body')
					.on('mouseenter', popup, function (event) {
						event.data.over.popup = true;
					})
					.on('mouseleave', popup, function (event) {
						event.data.over.popup = false;
						_hide(event.data);
					});
				var $popup = $('#veridu-popup-' + popup.user),
					target = $popup.find('iframe').contents()[0];
				target.open();
				target.write(html);
				target.close();
			})
			.fail(function () {
				popup.display = false;
				if (retry)
					_display(popup, false);
			});
	}

	function _hide(popup) {
		if (!popup.display)
			return;
		setTimeout(function () {
			if ((!popup.over.parent) && (!popup.over.popup)) {
				var $popup = $('#veridu-popup-' + popup.user);
				if ($popup.length) {
					$popup
						.stop(true, true)
						.fadeOut(function () {
							$(this).remove();
							popup.display = false;
						});
				}
			}
		}, 150);
	}

	Popup.attach = function (parent, user, width, method, url) {
		var popup = {
			display: false,
			method: method,
			over: {
				parent: false,
				popup: false
			},
			parent: parent,
			width: width,
			user: user,
			url: url
		};
		switch (method) {
			case 'hover':
				$(parent)
					.on('mouseenter', popup, function (event) {
						event.data.over.parent = true;
						if (!event.data.display)
							_display(event.data, true);
					})
					.on('mouseleave', popup, function (event) {
						event.data.over.parent = false;
						if (event.data.display)
							_hide(event.data);
					});
				break;
			case 'click':
				$(parent)
					.on('click', popup, function (event) {
						if (event.data.display)
							_hide(event.data);
						else
							_display(event.data, true);
						return false;
					})
					.on('mouseleave', popup, function (event) {
						if (event.data.display)
							_hide(event.data);
					});
				break;
			case 'both':
				$(parent)
					.on('mouseenter', popup, function (event) {
						event.data.over.parent = true;
						if (!event.data.display)
							_display(event.data, true);
					})
					.on('mouseleave', popup, function (event) {
						event.data.over.parent = false;
						if (event.data.display)
							_hide(event.data);
					})
					.on('click', popup, function (event) {
						if (event.data.display)
							_hide(event.data);
						else
							_display(event.data, true);
						return false;
					});
				break;
			default:
				Veridu.Common.log('Undefined attach method "' + method + '"!', true);
				return;
		}
		stack.push(popup);
	};

	Popup.detach = function (parent, user) {
		for (var i = 0; i < stack.length; i++)
			if ((stack[i].user === user) && (stack[i].parent === parent)) {
				if (stack[i].display)
					_hide(stack[i]);
				switch (stack[i].method) {
					case 'hover':
						$(parent)
							.off('mouseenter')
							.off('mouseleave');
						break;
					case 'click':
						$(parent).off('click');
						break;
				}
				stack = stack.splice(i, 1);
			}
	};

	return Popup;
}());


	Veridu.Widget = (function () {
	var Widget = {},
		badge_stack = [],
		batch_count = 0;

	function endpoint(user_id, endpoint, query) {
		var resource = endpoint + '/' + config.client + '/' + user_id;
		if (query)
			return Veridu.Common.widget_url(resource, $.extend(query, {
				'session': config.session,
				'language': config.language
			}));
		return Veridu.Common.widget_url(resource, {
			'session': config.session,
			'language': config.language
		});
	}

	function badge_url(type, size) {
		if ((size != 16) && (size != 32)) {
			Veridu.Common.log('Undefined badge size "' + size + '"!');
			size = 16;
		}
		switch (type) {
			case 'unreliable':
				var file = 'unreliable.png';
				break;
			case 'unverified':
				var file = 'unverified.png';
				break;
			case 'partially':
				var file = 'partially.png';
				break;
			case 'verified':
				var file = 'verified.png';
				break;
			case 'trustworthy':
				var file = 'trustworthy.png';
				break;
			default:
				Veridu.Common.log('Undefined badge type "' + type + '"!');
				return badge_url('unverified', size);
		}
		return Veridu.Common.assets_url('img/profile-marks/' + size + '/' + file);
	}

	function show_window(url, options) {
		var opts = $.extend({
				status: 0,
				toolbar: 0,
				location: 1,
				resizable: 0,
				scrollbars: 0,
				width: 800,
				height: 600
			}, options);
		opts.top = Math.max((screen.height - opts.height) / 2, 0);
		opts.left = Math.max((screen.width  - opts.width) / 2, 0);
		var args = $.map(opts, function (value, key) {
			return key + '=' + value;
		}).join(',');
		if (window.top != window.self)
			return window.top.open(url, '_blank', args);
		return window.open(url, '_blank', args);
	}

	function set_badge(json, element, size) {
		var img = 'unverified';
		if ((json.status) && (json.profile)) {
			if (json.profile.type === 'regular') {
				if (json.profile.overall == 0.0)
					img = 'unverified';
				else if (json.profile.overall < 0.6)
					img = 'partially';
				else
					img = 'verified';
			} else
				img = json.profile.type;
		}
		$(element).attr('src', badge_url(img, size));
	}

	function badge_update(realtime, size, retry) {
		batch_count = 0;
		var job_stack = [[]],
			current = 0;
		if (badge_stack.length == 0)
			return;
		if (badge_stack.length == 1) {
			Veridu.API.fetch('GET', '/user/' + badge_stack[0].user + '/overall')
				.done(function (json) {
					set_badge(json, badge_stack[0].element, size);
					if (realtime)
						setTimeout(function () { badge_update(true, size, true); }, 5000);
				})
				.fail(function (err) {
					if (retry)
						badge_update(realtime, size, false);
				});
			return;
		}
		for (var i = 0; i < badge_stack.length; i++) {
			job_stack[current].push({
				method: 'GET',
				resource: '/user/' + badge_stack[i].user + '/overall/'
			});
			if (job_stack[current].length == 50) {
				job_stack.push([]);
				current++;
			}
		}
		for (var i = 0; i < job_stack.length; i++) {
			Veridu.API.batch(job_stack.pop())
				.done(function (json) {
					if (json.status) {
						for (var i = 0; i < json.batch.length; i++)
							set_badge(json.batch[i], badge_stack[i].element, size);
					}
					batch_count++;
					if (realtime) {
						if (batch_count == job_stack.length)
							setTimeout(function () { badge_update(true, size, true); }, 5000);
					}
				})
				.fail(function (err) {
					if (retry)
						badge_update(realtime, size, false);
				});
		}
	}

	function request_update(container, user, retry) {
		Veridu.API.fetch('GET', '/request/' + user)
			.done(function (json) {
				if (json.status) {
					var $parent = $(container).parent();
					$parent.data('veriduRequestFresh', json.fresh);
					$parent.data('veriduRequestTotal', json.total);
					if (json.fresh > 0) {
						var file = json.fresh + '.png';
						if (json.fresh > 9)
							file = 'plus9.png';
						if (json.fresh > 25)
							file = 'exclamation.png';
						$parent
							.append('<img src="' + Veridu.Common.assets_url('img/notification-marks/' + file) + '" alt="" name="veridu-notification-counter" height="16" style="margin-left: -32px; margin-top: -8px">')
							.one('click', function () {
								$(this).find('img[name=veridu-notification-counter]').fadeOut(function () {
									$(this).remove();
								});
								return false;
							});
					}
					Veridu.Popup.attach($parent, user, 350, 'click', endpoint(user, 'request/listing'));
				}
			})
			.fail(function (err) {
				if (retry)
					request_update(container, user, false);
			});
	}

	Widget.badge_wrapper = function (options) {
		var cfg = $.extend(true, {
				height: 16,
				method: 'hover',
				popup: 'small',
				type: 'image',
				request: true,
				realtime: false
			}, options);
		switch (cfg.type) {
			case 'text':
				var img = 'mark';
				break;
			case 'image':
				var img = 'badge';
				break;
			default:
				Veridu.Common.log('Undefined wrapper type "' + cfg.type + '"!', true);
				return;
		}
		badge_stack.length = 0;
		$('img[data-veridu-user]').each(function (idx, el) {
			var data = $.extend({
				veriduPopup: true,
				veriduType: cfg.popup
			}, $(el).data());
			switch (data.veriduType) {
				case 'small':
					var width = 315;
					break;
				case 'large':
					var width = 615;
					break;
				default:
					Veridu.Common.log('Undefined popup type "' + type + '"!', true);
					return;
			}
			badge_stack.push({
				user: data.veriduUser,
				element: el
			});
			$(el)
				.attr('height', cfg.height)
				.attr('src', badge_url('unverified', cfg.height));
			if (data.veriduPopup)
				Veridu.Popup.attach(el, data.veriduUser, width, cfg.method, endpoint(data.veriduUser, 'popup/' + data.veriduType, {request: cfg.request}));
		});
		if (badge_stack.length)
			badge_update(cfg.realtime, cfg.height, true);
	};

	Widget.request_wrapper = function (container, user) {
		if ($(container).parent().attr('id') !== 'veridu-request-badge')
			$(container).wrap('<span id="veridu-request-badge" data-veridu-request-fresh="0" data-veridu-request-total="0" style="cursor: pointer" />');
		request_update(container, user, true);
	};

	Widget.request_widget = function (container, from, to, type) {
		Veridu.Common.show_iframe(container, endpoint(from, 'request/' + type, {to: to}), true);
	};

	Widget.document_widget = function (user) {
		if (!user) {
			Veridu.Common.log('Calling Widget.document_widget with invalid user parameter! (' + user + ')', true);
			return;
		}
		var opt = {
			width: 530,
			height: 390
		};
		show_window(endpoint(user, 'document/widget'), opt);
	};

	Widget.kba_widget = function (user, type) {
		if (!user) {
			Veridu.Common.log('Calling Widget.kba_widget with invalid user parameter! (' + user + ')', true);
			return;
		}
		switch (type) {
			case 'spotafriend':
				var url = endpoint(user, 'kba/spotafriend'),
					opt = {
						width: 530,
						height: 460
					};
				break;
			default:
				Veridu.Common.log('Undefined knowledge-based-authentication type "' + type + '"!', true);
				return;
		}
		show_window(url, opt);
	};

	Widget.otp_widget = function (user, type) {
		if (!user) {
			Veridu.Common.log('Calling Widget.otp_widget with invalid user parameter! (' + user + ')', true);
			return;
		}
		switch (type) {
			case 'sms':
				var url = endpoint(user, 'otp/sms', {country: config.country}),
					opt = {
						width: 770,
						height: 350
					};
				break;
			case 'email':
				var url = endpoint(user, 'otp/email'),
					opt = {
						width: 500,
						height: 325
					};
				break;
			default:
				Veridu.Common.log('Undefined one-time-password type "' + type + '"!', true);
				return;
		}
		show_window(url, opt);
	};

	Widget.cpr_widget = function (user) {
		if (!user) {
			Veridu.Common.log('Calling Widget.cpr_widget with invalid user parameter! (' + user + ')', true);
			return;
		}
		var opt = {
			width: 400,
			height: 300
		};
		show_window(endpoint(user, 'cpr/widget'), opt);
	};

	Widget.nemid_widget = function (user, redirect) {
		if (!user) {
			Veridu.Common.log('Calling Widget.nemid_widget with invalid user parameter! (' + user + ')', true);
			return;
		}
		if (redirect)
			return endpoint(user, 'nemid/widget', {redirect: redirect});
		var opt = {
			width: 600,
			height: 350
		};
		show_window(endpoint(user, 'nemid/widget'), opt);
	};

	Widget.provider_login = function (user, service, redirect) {
		if (!user) {
			Veridu.Common.log('Calling Widget.provider_login with invalid user parameter! (' + user + ')', true);
			return;
		}
		if (!service) {
			Veridu.Common.log('Calling Widget.provider_login with invalid service parameter! (' + service + ')', true);
			return;
		}
		if (redirect)
			return endpoint(user, 'provider/login/' + service, {redirect: redirect});
		return show_window(endpoint(user, 'provider/login/' + service));
	};

	Widget.profile = function (container, user) {
		if (!container) {
			Veridu.Common.log('Calling Widget.profile with invalid container parameter! (' + container + ')', true);
			return;
		}
		if (!user) {
			Veridu.Common.log('Calling Widget.profile with invalid user parameter! (' + user + ')', true);
			return;
		}
		Veridu.Common.show_iframe(container, endpoint(user, 'profile/user'), true);
	};

	Widget.verification = function (container, user, setup) {
		if (!container) {
			Veridu.Common.log('Calling Widget.verification with invalid container parameter! (' + container + ')', true);
			return;
		}
		if (!user) {
			Veridu.Common.log('Calling Widget.verification with invalid user parameter! (' + user + ')', true);
			return;
		}
		var parameters = {
			aot: [],
			oot: [],
			opt: [],
			country: config.country
		};
		if (setup.aot)
			parameters.aot = setup.aot.toString();
		if (setup.oot) {
			if (typeof setup.oot[0] === 'string')
				parameters.oot = setup.oot.toString();
			else {
				parameters.oot = [];
				while (setup.oot.length)
					parameters.oot.push(setup.oot.pop().toString());
			}
		}
		if (setup.opt)
			parameters.opt = setup.opt.toString();
		Veridu.Common.show_iframe(container, endpoint(user, 'profile/verification', parameters), true);
	};

	Widget.personal = function (user) {
		if (!user) {
			Veridu.Common.log('Calling Widget.personal with invalid user parameter! (' + user + ')', true);
			return;
		}
		show_window(endpoint(user, 'personal/form', {country: config.country}));
	};

	Widget.score = function (container, user, options) {
		if (!container) {
			Veridu.Common.log('Calling Widget.score with invalid container parameter! (' + container + ')', true);
			return;
		}
		if (!user) {
			Veridu.Common.log('Calling Widget.score with invalid user parameter! (' + user + ')', true);
			return;
		}
		var parameters = $.extend({
			setup: ['name','gender','birth','location','email','phone'],
			size: 'small'
		}, options);
		Veridu.Common.show_iframe(container, endpoint(user, 'score/display', parameters), true);
	};

	Widget.overall = function (container, user) {
		if (!container) {
			Veridu.Common.log('Calling Widget.overall with invalid container parameter! (' + container + ')', true);
			return;
		}
		if (!user) {
			Veridu.Common.log('Calling Widget.overall with invalid user parameter! (' + user + ')', true);
			return;
		}
		Veridu.Common.show_iframe(container, endpoint(user, 'score/overall'), true);
	};

	Widget.badges = function (container, user) {
		if (!container) {
			Veridu.Common.log('Calling Widget.badges with invalid container parameter! (' + container + ')', true);
			return;
		}
		if (!user) {
			Veridu.Common.log('Calling Widget.badges with invalid user parameter! (' + user + ')', true);
			return;
		}
		Veridu.Common.show_iframe(container, endpoint(user, 'badge/display'), true);
	};

	Widget.challenge = function (container, user, options) {
		if (!container) {
			Veridu.Common.log('Calling Widget.challenge with invalid container parameter! (' + container + ')', true);
			return;
		}
		if (!user) {
			Veridu.Common.log('Calling Widget.challenge with invalid user parameter! (' + user + ')', true);
			return;
		}
		Veridu.Common.show_iframe(container, endpoint(user, 'badge/challenge', options), true);
	};

	return Widget;
}());


	Veridu.SSO = (function () {
	var SSO = {};

	function endpoint(endpoint, query) {
		var resource = endpoint + '/' + config.client;
		if (query)
			return Veridu.Common.widget_url(resource, $.extend(query, {
				'session': config.session,
				'language': config.language
			}));
		return Veridu.Common.widget_url(resource, {
			'session': config.session,
			'language': config.language
		});
	}

	SSO.password_signup = function (redirect, nonce) {
		if (!redirect) {
			Veridu.Common.log('Calling SSO.password_signup with invalid redirect parameter! (' + redirect + ')', true);
			return;
		}
		if (!nonce) {
			Veridu.Common.log('Calling SSO.password_signup with invalid nonce parameter! (' + nonce + ')', true);
			return;
		}
		return endpoint('password/signup', {redirect: redirect, nonce: nonce});
	};

	SSO.password_login = function (redirect, nonce) {
		if (!redirect) {
			Veridu.Common.log('Calling SSO.password_login with invalid redirect parameter! (' + redirect + ')', true);
			return;
		}
		if (!nonce) {
			Veridu.Common.log('Calling SSO.password_login with invalid nonce parameter! (' + nonce + ')', true);
			return;
		}
		return endpoint('password/login', {redirect: redirect, nonce: nonce});
	};

	SSO.password_recover = function (redirect, nonce) {
		if (!redirect) {
			Veridu.Common.log('Calling SSO.password_recover with invalid redirect parameter! (' + redirect + ')', true);
			return;
		}
		if (!nonce) {
			Veridu.Common.log('Calling SSO.password_recover with invalid nonce parameter! (' + nonce + ')', true);
			return;
		}
		return endpoint('password/recover', {redirect: redirect, nonce: nonce});
	};

	SSO.provider_login = function (service, redirect, nonce, appid) {
		if (!service) {
			Veridu.Common.log('Calling SSO.provider_login with invalid service parameter! (' + service + ')', true);
			return;
		}
		if (!redirect) {
			Veridu.Common.log('Calling SSO.provider_login with invalid redirect parameter! (' + redirect + ')', true);
			return;
		}
		if (!nonce) {
			Veridu.Common.log('Calling SSO.provider_login with invalid nonce parameter! (' + nonce + ')', true);
			return;
		}
		if (appid)
			return endpoint('sso/login/' + service, {redirect: redirect, nonce: nonce, appid: appid});
		return endpoint('sso/login/' + service, {redirect: redirect, nonce: nonce});
	};

	SSO.widget = function (redirect, container, setup, nonce, appid) {
		if (!redirect) {
			Veridu.Common.log('Calling SSO.widget with invalid redirect parameter! (' + redirect + ')', true);
			return;
		}
		if (!container) {
			Veridu.Common.log('Calling SSO.widget with invalid container parameter! (' + container + ')', true);
			return;
		}
		if (!setup) {
			Veridu.Common.log('Calling SSO.widget with invalid setup parameter! (' + setup + ')', true);
			return;
		}
		if (!nonce) {
			Veridu.Common.log('Calling SSO.widget with invalid nonce parameter! (' + nonce + ')', true);
			return;
		}
		if (typeof setup !== 'string')
			setup = setup.toString();
		if (appid)
			Veridu.Common.show_iframe(container, endpoint('sso/widget', {redirect: redirect, setup: setup, nonce: nonce, appid: appid}), true);
		Veridu.Common.show_iframe(container, endpoint('sso/widget', {redirect: redirect, setup: setup, nonce: nonce}), true);
	};

	return SSO;
}());


	Veridu.prototype = {
		API: Veridu.API,
		Badge: Veridu.Badge,
		Widget: Veridu.Widget,
		SSO: Veridu.SSO,
		Version: Veridu.Version
	};

	return Veridu;
}(window.jQuery));
