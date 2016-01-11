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
					<h1 class="page-title ">
						Price Calculator
					</h1>
					<p class="page__description font-light">
						Create your tailored identity solution to see  the cost.  You'll be pleasantly surprised.
					</p>
				</div>

				<div class="header--right">
					<div class="checkout-container">
						<form id="form-checks" name="checks" class="form-cart" onsubmit="submitChecks()">
							<table>
								<tr>
									<td class="text-right"><span class="pricing__option-label">Checks/month:</span></td>
									<td>
										<div class="v-select">
											<ul>
												<li ng-click="cart.checks = 1000" ng-class="{selected: cart.checks == 1000}">1,000</li>
												<li ng-click="cart.checks = 2000" ng-class="{selected: cart.checks == 2000}">2,000</li>
												<li ng-click="cart.checks = 3000" ng-class="{selected: cart.checks == 3000}">3,000</li>
												<li ng-click="cart.checks = 4000" ng-class="{selected: cart.checks == 4000}">4,000</li>
												<li ng-click="cart.checks = 5000" ng-class="{selected: cart.checks == 5000}">5,000</li>
											</ul>
											<i class="material-icons">&#xE313;</i>
										</div>
									</td>
								</tr>
								<tr>
									<td >
										<span class="pricing__option-label">Total/month:</span>
									</td>
									<td class="value-td">
										<span ng-bind="(cart.getTotal() | number : 0 )  "></span> <small ng-bind="cart.currency"></small>
									</td>
								</tr>
								<tr>
									<td >
										<span class="pricing__option-label">Price/check:</span>
									</td>
									<td class="value-td">
										<span ng-bind="cart.getPricePerCheck()"></span> <small ng-bind="cart.currency"></small>
									</td>
								</tr>
								<tr>
									<td colspan="2" >
										<a href="javascript:;">Change currency</a>
									</td>
								</tr>
							</table>
						</form>
					</div>
				</div>

		</div>
		</div>
	</header>

	<div class="products-container" >
		<div>
			<section class="products--verification">
				<h4>VERIFICATION</h4>

				<ul class="products">
					<li>
						<button class="btn btn-success1 btn-lg" ng-click="cart.addProduct('social-media')" ng-class="{active: cart.hasProduct('social-media')}">
							<div class="product__description">Social Media</div>
							<div class="product__price">FREE</div>
						</button>
					</li>
					<li>
						<button class="btn btn-success1 btn-lg" ng-click="cart.addProduct('document-upload')" ng-class="{active: cart.hasProduct('document-upload')}">
							<div class="product__description">Document <br>Upload</div>
							<div class="product__price">FREE</div>
						</button>
					</li>
				</ul>

			</section>

			<section class="products--authentication">
				<h4>AUTHENTICATION</h4>

				<ul class="products">
					<li>
						<button class="btn btn-success2 btn-lg" ng-click="cart.addProduct('document-authentication')" ng-class="{active: cart.hasProduct('document-authentication')}">
							<div class="product__description">Document<br>Authentication</div>
							<div class="product__price"><span ng-bind="cart.getPricePerCheck()"></span> <span ng-bind="cart.currency"></span></div>
						</button>
					</li>
					<li>
						<button class="btn btn-success2 btn-lg" ng-click="cart.addProduct('email')" ng-class="{active: cart.hasProduct('email')}">
							<div class="product__description">Email</div>
							<div class="product__price">FREE</div>
						</button>
					</li>
					<li>
						<button class="btn btn-success2 btn-lg" ng-click="cart.addProduct('sms')" ng-class="{active: cart.hasProduct('sms')}">
							<div class="product__description">SMS</div>
							<div class="product__price"><span ng-bind="cart.getPricePerCheck()"></span> <span ng-bind="cart.currency"></span></div>
						</button>
					</li>
					<li>
						<button class="btn btn-success2 btn-lg" ng-click="cart.addProduct('kba')" ng-class="{active: cart.hasProduct('kba')}">
							<div class="product__description">KBA</div>
							<div class="product__price"><span ng-bind="cart.getPricePerCheck()"></span> <span ng-bind="cart.currency"></span></div>
						</button>
					</li>
				</ul>
			</section>
			<section class="products--credibility">
				<h4>CREDIBILITY</h4>

				<ul class="products">
					<li>
						<button class="btn btn-lightgreen btn-lg" ng-click="cart.addProduct('contact-info')" ng-class="{active: cart.hasProduct('contact-info')}">
							<div class="product__description">Contact Info</div>
							<div class="product__price"><span ng-bind="cart.getPricePerCheck()"></span> <span ng-bind="cart.currency"></span></div>
						</button>
					</li>
					<li>
						<button class="btn btn-lightgreen btn-lg" ng-click="cart.addProduct('age')" ng-class="{active: cart.hasProduct('age')}">
							<div class="product__description">Age</div>
							<div class="product__price"><span ng-bind="cart.getPricePerCheck()"></span> <span ng-bind="cart.currency"></span></div>
						</button>
					</li>
				</ul>
			</section>
			<section class="products--insight">
				<h4>INSIGHT</h4>

				<ul class="products">
					<li>
						<button class="btn btn-bluegreen btn-lg" ng-click="cart.addProduct('work')" ng-class="{active: cart.hasProduct('work')}">
							<div class="product__description">Work</div>
							<div class="product__price"><span ng-bind="cart.getPricePerCheck()"></span> <span ng-bind="cart.currency"></span></div>
						</button>
					</li>
					<li>
						<button class="btn btn-bluegreen btn-lg" ng-click="cart.addProduct('education')" ng-class="{active: cart.hasProduct('education')}">
							<div class="product__description">Education</div>
							<div class="product__price"><span ng-bind="cart.getPricePerCheck()"></span> <span ng-bind="cart.currency"></span></div>
						</button>
					</li>
				</ul>
			</section>
			<section class="products--red-flags">
				<h4>RED FLAGS</h4>

				<ul class="products">
					<li>
						<button class="btn btn-warning2 btn-lg" ng-click="cart.addProduct('general-warnings')" ng-class="{active: cart.hasProduct('general-warnings')}">
							<div class="product__description">General<br>Warnings</div>
							<div class="product__price"><span ng-bind="cart.getPricePerCheck()"></span> <span ng-bind="cart.currency"></span></div>
						</button>
					</li>
					<li>
						<button class="btn btn-warning2 btn-lg" ng-click="cart.addProduct('specific-warnings')" ng-class="{active: cart.hasProduct('specific-warnings')}">
							<div class="product__description">Specific Warnings</div>
							<div class="product__price"><span ng-bind="cart.getPricePerCheck()"></span> <span ng-bind="cart.currency"></span></div>
						</button>
					</li>
				</ul>
			</section>
			<section class="products--red-flags">
				<h4>DISCOUNTS</h4>

				<ul class="products">
					<li>
						<button class="btn btn-yellow btn-lg">
							<div class="product__description">10% Off</div>
							<div class="product__price">£1000<span class="font-light">/Month</span></div>
						</button>
					</li>
					<li>
						<button class="btn btn-yellow btn-lg">
							<div class="product__description">10% Off</div>
							<div class="product__price">£1000<span class="font-light">/Month</span></div>
						</button>
					</li>
					<li>
						<button class="btn btn-yellow btn-lg">
							<div class="product__description">10% Off</div>
							<div class="product__price">£1000<span class="font-light">/Month</span></div>
						</button>
					</li>
				</ul>
			</section>
		</div>
	</div>
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
