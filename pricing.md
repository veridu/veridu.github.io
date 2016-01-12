---
title: Pricing
description: Create your tailored identity solution to see  the cost.  You'll be pleasantly surprised.
layout: blank
class: pricing
---
<div id="pricing-wrapper" ng-controller="PricingCtrl as ctrl">

	<header class="page-header">
		<div class="header-content">
			<div class="v-row">
				<div class="header--left">
					<h2 id="low-cost-section" class="page-title ">
						Low-cost <div class="clearfix visible-xs"></div> <span class="text-capitalize">global</span> KYC<span class="visible-xs">.</span>
					</h2>
					<p class="page__description font-light">
						We believe every internet business, no matter how small, should have cost-effective access to enterprise grade identity, authentication, insight and reputation tools to grow their businesses globally.
					</p>
				</div>
			</div>
		</div>
	</header>
	<section class="plans-wrapper" ng-swipe-left="nextPlan()" ng-swipe-right="prevPlan()">
		<div class="plans-container">
			<div class="plans-descriptions">
				<div class="cell cell--separator">
					<h4 class="plan-heading">Monthly Subscription</h4>
					<p class="plan-description" ng-class="{'mobile-vis': msub}">
						<span>Multi source verification and authentication using social networks, online services, knowledge based authentication, email, sms etc.</span>
						<a href="javascript:;" class="black-link"  ng-click="msub = !msub" >({ msub ? 'Show less' : 'Read more'})</a>
					</p>
				</div>

				<div class="cell cell--separator">
					<h4 class="plan-heading">Single Source Verification</h4>
					<p class="plan-description" ng-class="{'mobile-vis': ssv}">
						<span >Single source verification and authentication using social networks and online services.</span>
						<a href="javascript:;" class="black-link"  ng-click="ssv = !ssv" >({ ssv ? 'Show less' : 'Read more'})</a>
					</p>
				</div>

				<div class="cell">
					<h4 class="plan-heading">Multi Source Verification</h4>
					<p class="plan-description" ng-class="{'mobile-vis': msv}">
						<span>Multi source verification and authentication using social networks, online services, knowledge based authentication, email, sms etc.</span>
						<a href="javascript:;" class="black-link"  ng-click="msv = !msv" >({ msv ? 'Show less' : 'Read more'})</a>
					</p>
				</div>

			</div>
			<div class="plans-sizes">
				<div>

					<div class="plan-size" ng-class="currentPlan !== 0 ? 'plan-size--not-active fadeOutMobile' :'fadeInMobile'">
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
						<div class="plan__cell plan__cell--last ">
							<div class="plan-size__value">
								<span>£</span>
								<h2>0.20</h2>
							</div>
							<p class="per-month">per check</p>
						</div>
					</div>
					<div class="plan-size" ng-class="currentPlan !== 1 ? 'plan-size--not-active fadeOutMobile' :'fadeInMobile'">
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
						<div class="plan__cell plan__cell--last">
							<div class="plan-size__value">
								<span>£</span>
								<h2>0.11</h2>
							</div>
							<p class="per-month">per check</p>
						</div>
					</div>
					<div class="plan-size" ng-class="currentPlan !== 2 ? 'plan-size--not-active fadeOutMobile' :'fadeInMobile'">
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
						<div class="plan__cell plan__cell--last ">
							<div class="plan-size__value">
								<span>£</span>
								<h2>0.07</h2>
							</div>
							<p class="per-month">per check</p>
						</div>
					</div>
					<div class="plan-size dummy-plan" ng-class="{'plan-size--not-active' : currentPlan !== 3}">
						<div class="plan__cell plan__cell--heading plan__cell--heading--low"
							ng-class="{
								'plan__cell--heading--low' : currentPlan === 2,
								'plan__cell--heading--high' : currentPlan === 1,
								'plan__cell--heading--medium' : currentPlan === 0
							}"
							>
						</div>
						<div class="plan__cell ">
						</div>
						<div class="plan__cell plan__cell--last ">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="mobile-indicators">
			<span ng-class="{active : currentPlan === 0}" ng-click="showPlan(0)"></span>
			<span ng-class="{active : currentPlan === 1}" ng-click="showPlan(1)"></span>
			<span ng-class="{active : currentPlan === 2}" ng-click="showPlan(2)"></span>
		</div>
	</section>
	<section class="advantages-wrapper" id="what-you-get-section">

		<div class="advantages-container">

			<h2>What you get</h2>

			<ul class="v-list">
				<li>
					<h4>Verification</h4>
					<p>Verify users globally using social networks, online services and documents. Combine as many sources as you like to achieve the best results.</p>
					<span class="v-tag v-tag--success1">Facebook</span>
					<span class="v-tag v-tag--success1">Twitter</span>
					<span class="v-tag v-tag--success1">Google</span>
					<span class="v-tag v-tag--success1">Paypal</span>
				</li>
				<li>
					<h4>Verification</h4>
					<p>
						Multi source verification and authentication using social networks, online services, knowledge based authentication, email, sms etc.
					</p>
					<span class="v-tag v-tag--yellow">Facebook</span>
					<span class="v-tag v-tag--yellow">Twitter</span>
					<span class="v-tag v-tag--yellow">Google</span>
					<span class="v-tag v-tag--yellow">Paypal</span>
				</li>
				<li>
					<h4>Authentication</h4>
					<p>
						Use traditional two-factor authentication or our dynamic knowledge based authentication to make sure you are dealing with the right person.
					</p>
					<span class="v-tag v-tag--success2">Facebook</span>
					<span class="v-tag v-tag--success2">Twitter</span>
					<span class="v-tag v-tag--success2">Google</span>
					<span class="v-tag v-tag--success2">Paypal</span>
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

	function load (){
		(function  detectCurrentSection() {

			// jQuery query caching
			var $window =  $(window);
			var $nav =  $('nav.nav');
			var $menuItems = $('.menu-content .collapsibleItem');
			var navHeight = $nav.height();
			var $menuHeight = $('.menu-content');
			var $currentState = $('.current-state');
			var fixed_header = $('nav.nav')[0];
			var lastScrollPos = $window.scrollTop();
			var t0, t1;
			var currentState = $('#submenu-low-cost').text();
			var $menuContent = $('.menu-content');

			// mobile detection helpers
			var mbHelper =  $('#mobile-indicator');
			var mobile = mobile = mbHelper.is(':visible');

			// sections height
			var lowCostHeight, whatYouGetHeight;
			getSectionsHeight();

			$window.resize(getSectionsHeight);
			function getSectionsHeight() {

				mobile = mbHelper.is(':visible');
				lowCostHeight = 0;
				whatYouGetHeight =  $('#what-you-get-section').offset().top - 100;

				if (mobile) {
					$nav.css('min-height', 'auto');
					$menuContent.css('height', "auto");
				}
			}

			$menuItems.addClass('animated');
			$window.scroll(detect);
			detect();

			function detect() {

				var scrolled = $window.scrollTop();
				// detects change on sections offset
				// updates current state
				if (scrolled < whatYouGetHeight) {
					setActiveSection('#submenu-low-cost', $('#submenu-low-cost').text());
				} else{
					setActiveSection('#submenu-what-you-get', $('#submenu-what-you-get').text());
				}

				var scrollT;

				function hideSubmenu() {
					if (mobile)
						return;
					$menuItems.removeClass('fadeIn');
					$menuItems.addClass('fadeOut');
					$currentState.css('top', "-2.58em");
					$nav.css('min-height', "2em");
					$menuContent.css('height', "2em");
				}

				function showSubmenu() {
					if (mobile)
						return;

					$menuItems.addClass('fadeIn');
					$menuItems.removeClass('fadeOut');
					$nav.css('min-height', '6em');
					$currentState.css('top', "0px");
				}

				var height = getDocHeight();
				var dist = $(window).scrollTop() + $(window).height();

				if (height == dist) {
					setTimeout(function () {

						var height = getDocHeight();
						var dist = $(window).scrollTop() + $(window).height();
						if (height == dist) {
							showSubmenu();
						}

					}, 100);
				}

				if (! mobile && scrolled) {

					// check if scrolled up or down
					if (lastScrollPos < scrolled) {
						// down
						if (scrolled > 100) {
							hideSubmenu();
						} else {
							showSubmenu();
						}

					} else {

						// not on the bottom of the page
						if (!(dist < height) ) {
							hideSubmenu();
						} else {
							showSubmenu();
						}

					}

					lastScrollPos = scrolled;
				} else {

					$currentState.css('top', "0px");

					if (mobile) {
						$nav.css('min-height', 'auto');
						$menuContent.css('height', "auto");
					} else {
						$nav.css('min-height', navHeight);
					}

				}
			}

			function setActiveSection(sectionId, currentStateName) {
				if (currentState != sectionId) {
					$('#pricing-submenu').find('a').removeClass('active');
					$(sectionId).addClass('active');
					$('#pricing-curent-position').html(currentStateName);
				}
				currentState = sectionId;
			}

			ctrl.$inject = ['$scope'];
			function ctrl($scope) {
				$scope.currentPlan = 0;

				if (mobile) {
					$scope.nextPlan = function (){
						$scope.currentPlan = $scope.currentPlan < 2 ? $scope.currentPlan + 1 : 0;
					}

					$scope.prevPlan = function (){
						$scope.currentPlan = $scope.currentPlan > 0 ? $scope.currentPlan - 1 : 2;
					}

					$scope.showPlan = function (index) {
						$scope.currentPlan = index;
					}
				}

			}
			angular.module('app').controller('PricingCtrl', ctrl);

		})();
	}

	document.addEventListener('DOMContentLoaded', load);

</script>
