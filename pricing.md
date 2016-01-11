---
title: Pricing
description: Create your tailored identity solution to see  the cost.  You'll be pleasantly surprised.
layout: blank
class: pricing
---
<div id="pricing-wrapper" ng-controller="CartCtrl as cart">

	<header class="page-header">
		<div class="header-content">
			<div class="v-row">
				<div class="header--left">
					<h2 class="page-title ">
						Basic Pricing model <span class="visible-xs">explained</span>
					</h2>
					<p class="page__description font-light">
						Multi source verification and authentication using social networks, online services, knowledge based authentication, email, sms etc.
					</p>
				</div>
			</div>
		</div>
	</header>
	<section class="plans-wrapper">
		<div class="plans-container">
			<div class="plans-descriptions">
				<div class="cell cell--separator">
					<h4 class="plan-heading">Subscription</h4>
					<p class="plan-description">
						Multi source verification and authentication using social networks, online services, knowledge based authentication, email, sms etc.
					</p>
				</div>

				<div class="cell cell--separator">
					<h4 class="plan-heading">Subscription</h4>
					<p class="plan-description">
						Verified single source authentication using social networks and online services.
					</p>
				</div>

				<div class="cell">
					<h4 class="plan-heading">Subscription</h4>
					<p class="plan-description">
						Multi source verification and authentication using social networks, online services, knowledge based authentication, email, sms etc.
					</p>
				</div>

			</div>
			<div class="plans-sizes">
				<div>

					<div class="plan-size">
						<div class="plan__cell plan__cell--heading plan__cell--heading--low">
							<p class="plan-size__label">Low</p>
							<div class="plan-size__value">
								<span>£</span> <h2>25</h2>
							</div>
							<p class="per-month">per month</p>
						</div>
						<div class="plan__cell ">
							<div class="plan-size__value">
								<span>£</span>
								<h2>0.08</h2>
							</div>
							<p class="per-month">per check</p>
						</div>
						<div class="plan__cell ">
							<div class="plan-size__value">
								<span>£</span>
								<h2>0.20</h2>
							</div>
							<p class="per-month">per check</p>
						</div>
					</div>
					<div class="plan-size">
						<div class="plan__cell plan__cell--heading plan__cell--heading--medium">
							<p class="plan-size__label">Medium</p>
							<div class="plan-size__value">
								<span>£</span><h2>175</h2>
							</div>
							<p class="per-month">per month</p>
						</div>
						<div class="plan__cell ">
							<div class="plan-size__value">
								<span>£</span>
								<h2>0.05</h2>
							</div>
							<p class="per-month">per check</p>
						</div>
						<div class="plan__cell ">
							<div class="plan-size__value">
								<span>£</span>
								<h2>0.11</h2>
							</div>
							<p class="per-month">per check</p>
						</div>
					</div>
					<div class="plan-size">
						<div class="plan__cell plan__cell--heading plan__cell--heading--high">
							<p class="plan-size__label">High</p>
							<div class="plan-size__value">
								<span>£</span><h2>1,250</h2>
							</div>
							<p class="per-month">per month</p>
						</div>
						<div class="plan__cell ">
							<div class="plan-size__value">
								<span>£</span>
								<h2>0.04</h2>
							</div>
							<p class="per-month">per check</p>
						</div>
						<div class="plan__cell ">
							<div class="plan-size__value">
								<span>£</span>
								<h2>0.07</h2>
							</div>
							<p class="per-month">per check</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="advantages-wrapper">

		<div class="advantages-container">

			<h2>What you get</h2>

			<ul class="v-list">
				<li>
					<h4>Subscription</h4>
					<p>Multi source verification and authentication using social networks, online services, knowledge based authentication, email, sms etc.</p>
					<span class="v-tag v-tag--success1">Facebook</span>
					<span class="v-tag v-tag--success1">Twitter</span>
					<span class="v-tag v-tag--success1">Google</span>
					<span class="v-tag v-tag--success1">Paypal</span>
				</li>
				<li>
					<h4>Subscription</h4>
					<p>Multi source verification and authentication using social networks, online services, knowledge based authentication, email, sms etc.</p>
				</li>
				<li>
					<h4>Subscription</h4>
					<p>Multi source verification and authentication using social networks, online services, knowledge based authentication, email, sms etc.</p>
				</li>
				<li>
					<h4>Subscription</h4>
					<p>Multi source verification and authentication using social networks, online services, knowledge based authentication, email, sms etc.</p>
				</li>
				<li>
					<h4>Subscription</h4>
					<p>Multi source verification and authentication using social networks, online services, knowledge based authentication, email, sms etc.</p>
				</li>
				<li>
					<h4>Subscription</h4>
					<p>Multi source verification and authentication using social networks, online services, knowledge based authentication, email, sms etc.</p>
				</li>
				<li>
					<h4>Subscription</h4>
					<p>Multi source verification and authentication using social networks, online services, knowledge based authentication, email, sms etc.</p>
				</li>
			</ul>

		</div>

	</section>
</div>

<script type="text/javascript">


	function submitChecks () {
		var form = $('#form-checks');

	}

	function load (){

		$(".dropdown-menu a").click(handleScroll);
		$(".pricing-submenu a").click(handleScroll);

		// handles submenu clicks
		function handleScroll(event) {

			var id = $(this).attr('data-scrollTo');
			if (id) {
				event.preventDefault();
				$('#pricing-curent-position').text(id.replace('#',''));
				scrollToHash(id);
			}

		}
		angular.module('app').controller('CartCtrl', CartCtrl);

		CartCtrl.$inject = ['$scope'];
		function CartCtrl ($scope) {

			var vm = this;
			vm.total = 0;
			vm.currency = '£';
			vm.checks = "1000";
			vm.getPricePerCheck = getPricePerCheck;
			vm.items = [];
			vm.itemsObject = {};
			vm.totalChecks = 0;

			vm.pricePerCheck = {
				'£': 0.038,
				'€': 0.000,
				'$': 0.000
			};


			vm.hasItem = hasItem;
			vm.getTotal = getTotal;
			vm.addProduct = addProduct;
			vm.hasProduct = hasProduct;
			vm.removeProduct = removeProduct;
			vm.changeCurrency = changeCurrency;

			function getPricePerCheck() {
				return vm.pricePerCheck[vm.currency];
			}

			function changeCurrency(value) {
				switch (value) {
					case '£':
						//change
					break;

					case '€':
						//change
					break;

					case '$':
						// change
					break;

					default:
					break;
				}
			}

			function getTotal() {
				return vm.totalChecks * vm.getPricePerCheck() * vm.checks;
			}

			$scope.$watch('cart.currency', function (value) {
				if (value) {
					vm.changeCurrency(value);
				}
			});

			function hasProduct(key) {
				return !! vm.itemsObject[key];
			}

			function addProduct (key) {

				if (vm.itemsObject[key]) {
					vm.items.splice(vm.itemsObject[key].index, 1);

					if (vm.allProducts[key].value) {
						vm.totalChecks--;
					}

					delete vm.itemsObject[key];

				} else {

					if (vm.allProducts[key].value) {
						vm.totalChecks++;
					}

					vm.itemsObject[key] = {
   						index : vm.items.push(vm.allProducts[key]) - 1
   					};
				}

			}

			function removeProduct (key) {
				vm.items.map(function  (item, index) {
					if (item.key == key)
						vm.items.splice(index, 1);
				});

			}

			function hasItem (key) {
				var found = false;
				vm.items.map(function  (item) {
					if (item.key == key)
						found = true;
				});
				return found;
			}

			vm.allProducts = {
				'social-media': {
					name:'Social Media',
					value: 0
				},
				'document-upload': {
					name: 'Document Upload',
					value : 0
				},
				'document-authentication': {
					name: 'Document Authentication',
					value : 1
				},
				'email': {
					name: 'Email',
					value : 0
				},
				'sms': {
					name: 'SMS',
					value : 1
				},
				'kba': {
					name: 'KBA',
					value : 1
				},
				'contact-info': {
					name: 'Contact Info',
					value : 1
				},
				'age': {
					name: 'Age',
					value : 1
				},
				'work': {
					name: 'Work',
					value : 1
				},
				'education': {
					name: 'Education',
					value : 1
				},
				'general-warnings': {
					name: 'General Warning',
					value : 1
				},
				'specific-warnings': {
					name: 'Specific Warning',
					value : 1
				}
			};

			vm.prices = {
				'0.035': {
					gbp: 0.035,
					eur: 0.040,
					usd: 0.049
				}
			}

		}


		(function () {

			// var fixed_header = document.querySelector('.cart-status');
			// var header  =	$('#form-checks')
			//
			// window.addEventListener('scroll', function  () {
			//
			// 	var elementPosition  = header.offset();
			// 	var scrolled 	 = document.documentElement.scrollTop || document.body.scrollTop ;
			//
			// 	//will show
			// 	if ( scrolled > elementPosition.top ){
			//
			// 		if (fixed_header.style.display != 'block'){
			//
			// 			fixed_header.style.display =  'block';
			//
			// 		}
			//
			// 	} else { //will hide
			//
			// 		if (fixed_header.style.display != 'none'){
			//
			// 			fixed_header.style.display =  'none';
			//
			// 		}
			// 	}
			// });

		})();

	}

	document.addEventListener('DOMContentLoaded', load);

</script>
