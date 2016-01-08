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
										<span ng-bind="(cart.getTotal() | currency : '')  "></span> <small ng-bind="cart.currency"></small>
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
										<a href="#">Change currency</a>
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

		<section class="products--verification">
			<h4 >VERIFICATION</h4>
			<ul class="products">
				<li>
					<button class="btn btn-success1 btn-lg" ng-click="cart.addProduct('media')">
						<div class="product__description">Social<br>Media</div>
						<div class="product__price">FREE</div>
					</button>
				</li>
				<li>
					<button class="btn btn-success1 btn-lg" ng-click="cart.addProduct('media')">
						<div class="product__description">Document<br>Upload</div>
						<div class="product__price">FREE</div>
					</button>
				</li>
				<li>
					<button class="btn btn-success1 btn-lg" ng-click="cart.addProduct('media')">
						<div class="product__description">Document<br>Verification</div>
						<div class="product__price">FREE</div>
					</button>
				</li>
			</ul>

		</section>

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

			vm.pricePerCheck = {
				'£': 0.000,
				'€': 0.000,
				'$': 0.000
			};


			vm.hasItem = hasItem;
			vm.getTotal = getTotal;
			vm.addProduct = addProduct;
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
				return 2000;
			}

			$scope.$watch('cart.items', function (items) {
				if (items.length) {
					vm.total = (vm.items.reduce(function (a,b) {
										return {value: a.value + b.value};
									}, {value: 0})).value;
				} else {
					vm.total = 0;
				}
			}, true);
			$scope.$watch('cart.currency', function (value) {
				if (value) {
					vm.changeCurrency(value);
				}
			});

			function addProduct (key) {
				vm.items.push(vm.allProducts[key]);
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
					value:0
				},
				'online-services': {
					name: 'Online Services',
					value : 0
				},
				'knowledge-based-authentication': {
					name: 'Knowledge-based Authentication',
					value : 0.035
				},
				'document-upload': {
					name: 'Document Upload',
					value : 0
				},
				'email': {
					name: 'Email',
					value : 0
				},
				'age': {
					name: 'Age',
					value : 0.035
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

			var fixed_header = document.querySelector('.cart-status');
			var header  =	$('#form-checks')

			window.addEventListener('scroll', function  () {

				var elementPosition  = header.offset();
				var scrolled 	 = document.documentElement.scrollTop || document.body.scrollTop ;

				//will show
				if ( scrolled > elementPosition.top ){

					if (fixed_header.style.display != 'block'){

						fixed_header.style.display =  'block';

					}

				} else { //will hide

					if (fixed_header.style.display != 'none'){

						fixed_header.style.display =  'none';

					}
				}
			});

		})();

	}

	document.addEventListener('DOMContentLoaded', load);

</script>
