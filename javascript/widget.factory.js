var app = angular.module('app');

Widget.$inject = ["Veridu", "VeriduUI", "Auth"];
function Widget (Veridu, VeriduUI, Auth) {

	var vm = this;

	vm.Veridu = Veridu;
	vm.username = Auth.username;

	vm.init = init;
	vm.populate = populate;
	vm.getStatusMessage = getStatusMessage;
	vm.getFlagMessage = getFlagMessage;

	function getStatusMessage () {

		switch(vm.statusString){
			case 'verified':
				return 'You are verified'
				break;
			case 'partially-verified':
				return 'You are partially verified'
				break;
			case 'not-verified':
				return 'You are not verified'
				break;
			default:
				return ''
				break;
		}
	}
	function init($scope) {

		// binds view scope to make 2-way data binding work on polling
		vm.$scope = $scope;
		vm.score = 0;
		vm.statusString = 'not-verified';
		vm.badges = badges;
		vm.populated = false;

		// theme
		vm.progressColor = '#305D6E';
		vm.progressTextColor = '#FFFFFF';
		vm.warningColor = '#FFF885';
		vm.warningTextColor = '#888888';

		vm.timestamp = 0
		vm.retry = 0;
		vm.msg = {
			aot: 'Mandatory verification methods',
			oot: 'You must do one of these verification methods to proceed',
			opt: 'Voluntary verification methods',
			end: 'Your verification process is complete'
		};

		poll();

	}

	// make it easier to handle on templates
	function getStatusString (value) {
		if (!value)
			return 'not-verified';
		if (value < 0.6)
			return 'partially-verified';
		return 'verified';
	}

	// populates Widget
	function populate (json) {

		vm.$scope.$apply(function () {

			vm.populated = true;

			json.provider.map(function (provider) {
				vm.badges[provider].active = true;
			});

			vm.completed = Object.keys(vm.badges).length == json.provider.length;

			if (typeof(json.user) == 'object') {
				vm.user = json.user;
			}

			vm.status = json.status;
			vm.state = json.state;
			vm.score = json.user ? json.user.overall : 0;
			vm.statusString  = getStatusString(vm.score);
			vm.flags = json.flags || [];

			vm.hoursToFake = Math.round(5000 * Math.pow(vm.score, 4));

		});

	}

	// flagMessages Object Literal
	var flagMessages = {
		birthDayReview: 'Birth Day Review',
		birthMonthReview: 'Birth Month Review',
		birthYearReview: 'Birth Year Review',
		emailOTP: 'E-mail OTP Review',
		emptyProfile: 'Empty Profile',
		firstNameMismatch: 'First Name Mismatch',
		isListedName: 'Listed Name',
		lastNameMismatch: 'Last Name Mismatch',
		middleNameMismatch: 'Middle Name Mismatch',
		newProfile: 'New Profile',
		phoneOTP: 'Phone OTP Review',
		spotafriendKBA: 'Spot-a-Friend KBA Review'
	};

	function getFlagMessage (flag) {
		return flagMessages[flag];
	}

	function poll () {

		(function update() {
			vm.Veridu.API.fetch('GET', '/profile/' + vm.username)
				.done(function (json) {

					vm.populate(json);
					setTimeout(update, 1000);

				})
				.fail(function (err) {
					if (vm.retry < 4) {
						setTimeout(update, (1000 + (500 * retry)));
						vm.retry++;
					} else
						VeriduUI.Block.error('Whoops!', err.message);
				});
		})();
	}

	// badges Object Literal
	var badges = {
		'dropbox': {
			name: 'dropbox',
			active: false
		},
		'facebook': {
			name: 'facebook',
			active: false
		},
		'linkedin': {
			name: 'linkedin',
			active: false
		},
		'paypal': {
			name: 'paypal',
			active: false
		},
		'amazon': {
			name: 'amazon',
			active: false
		},
		'spotify': {
			name: 'spotify',
			active: false
		},
		'twitter': {
			name: 'twitter',
			active: false
		},
		'google': {
			name: 'google',
			active: false
		},
		'instagram': {
			name: 'instagram',
			active: false
		},
		'yahoo': {
			name: 'yahoo',
			active: false
		},
		'email': {
			name: 'email',
			active: false
		},
		'sms': {
			name: 'sms',
			active: false
		},
		'spotafriend': {
			name: 'spotafriend',
			active: false
		},
		'cpr': {
			name: 'cpr',
			active: false
		},
		'nemid': {
			name: 'nemid',
			active: false
		},
		'personal': {
			name: 'personal',
			active: false
		},
		'document': {
			name: 'document',
			active: false
		}
	};

	return this;
}

app.factory('Widget', Widget);