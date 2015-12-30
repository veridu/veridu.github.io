---
title: Solutions
layout: blank
class: solutions
description: What company doesn't want to know their users better? These are just some of the sectors we work with so if you don't see yours listed get in touch, we love to talk.
---
<div ng-controller="SolutionsCtrl as ctrl">

	<section class="solution__section__container content-padding font-light" id="sectors-section">
		<h2 class="solution__section__title">Sectors</h2>
		<p class="solution__section__description">
			What company doesn't want to know their users better? These are just some of the sectors we work with so if you don't see yours listed get in touch, we love to talk.
		</p>
	</section>


	<section id="sectors-tabs" class="solution__item">
		<div id="sectors" class="solution__item__content">
			<div class="border-right" ng-show="ctrl.sectorsTabs.active == 'payments'" >
				<h2  class="solution__item__title">Payments</h2>
				<p class="solution__item_description">Verify identity better globally. Decline fewer transactions. Improve user experience.</p>
			</div>

			<div ng-show="ctrl.sectorsTabs.active == 'p2p'">
				<h2  class="solution__item__title">Peer to Peer</h2>
				<p class="solution__item_description">Build trust. Drive community engagement. Put members in control.</p>
			</div>

			<div  ng-show="ctrl.sectorsTabs.active == 'recruiting'">
				<h2  class="solution__item__title">Recruiting</h2>
				<p class="solution__item_description">Enhance candidate vetting. Identify the superstars. Make clients happy.</p>
			</div>

			<div ng-show="ctrl.sectorsTabs.active == 'real_estate'">
				<h2  class="solution__item__title">Real Estate</h2>
				<p class="solution__item_description">Build a trusted business. Keep customers safe. Identify, vet and put a face on viewers.</p>
			</div>
		</div>
	</section>
	<div class="panel-controls">
		<div >
			<div class="separator" ng-class="{selected : ctrl.sectorsTabs.active == 'payments'}" ng-click="ctrl.setActive('sectors', 'payments')">Payments</div>
		</div>
		<div >
			<div ng-class="{selected : ctrl.sectorsTabs.active == 'recruiting'}" ng-click="ctrl.setActive('sectors', 'recruiting')">Recruiting</div>
		</div>
		<div >
			<div class="separator" ng-class="{selected : ctrl.sectorsTabs.active == 'p2p'}" ng-click="ctrl.setActive('sectors', 'p2p')">Peer to Peer</div>
		</div>
		<div >
			<div ng-class="{selected : ctrl.sectorsTabs.active == 'real_estate'}" ng-click="ctrl.setActive('sectors', 'real_estate')">Real Estate</div>
		</div>
	</div>

		<section class="solution__section__container solution__section__container--clients-partners content-padding font-light" id="clients-partners-section">
			<h2 class="solution__section__title">Clients & Partners</h2>
			<p class="solution__section__description">
				We're proud to be working with some truly innovative companies, both big and growing. Here's a taster of how we're working together.
			</p>
		</section>


		<section id="partners-tabs" class="solution__item solution__item__notfirst">
			<div id="clients-partners" class="solution__item__content solution__item__content--purple">

				<div ng-show="ctrl.partnersTabs.active == 'payfriendz'">
					<h2 class="solution__item__title">Payfriendz</h2>
					<p class="solution__item_description" >
						Payfriendz is a mobile app to transfer money between friends. <br>
						What do they use Veridu for? <br>
					</p>
				</div>
				<div ng-show="ctrl.partnersTabs.active == 'durise'">
					<h2 class="solution__item__title">Durise</h2>
					<p class="solution__item_description" >
						Durise is a Dubai based real estate crowdfunding platform. <br>
						What do they use Veridu for? <br>
					</p>
				</div>
				<div ng-show="ctrl.partnersTabs.active == 'real_asset'">
					<h2 class="solution__item__title">Real Asset Company</h2>
					<p class="solution__item_description" >
						The Real Asset Company is an innovative gold investment platform with its own cryptocurrency. <br>
						What do they use Veridu for? <br>
					</p>
				</div>
				<div class="solution__item__tags__container">
					<div>
						<div ng-show="ctrl.partnersTabs.active == 'payfriendz'">
							<div class="tag tag--sectors">Payments</div>
							<div class="clearfix"></div>
							<div class="tag tag--sources">Social Media & Online Services</div>
							<div class="clearfix"></div>
							<div class="tag tag--scores">Contact Info</div>
							<div class="tag tag--scores">Insight</div>
							<div class="clearfix"></div>
							<div class="tag tag--partner">Payfriendz</div>
						</div>
						<div  ng-show="ctrl.partnersTabs.active == 'durise'">
							<div class="tag tag--sectors">Peer to Peer</div>
							<div class="tag tag--sectors">Real Estate</div>
							<div class="clearfix"></div>
							<div class="tag tag--sources">Social Media & Online Services</div>
							<div class="tag tag--sources">Email</div>
							<div class="tag tag--sources">SMS</div>
							<div class="tag tag--sources">Knowledge-based Authentication</div>
							<div class="clearfix"></div>
							<div class="tag tag--scores">Contact Info</div>
							<div class="tag tag--scores">Age</div>
							<div class="clearfix"></div>
							<div class="tag tag--partner">Durise</div>
						</div>
						<div  ng-show="ctrl.partnersTabs.active == 'real_asset'">
							<div class="tag tag--sectors">Payments</div>
							<div class="clearfix"></div>
							<div class="tag tag--sources">Social Media & Online Services</div>
							<div class="tag tag--sources">Email</div>
							<div class="tag tag--sources">SMS</div>
							<div class="tag tag--sources">Knowledge-based Authentication</div>
							<div class="clearfix"></div>
							<div class="tag tag--scores">Contact Info</div>
							<div class="tag tag--scores">Age</div>
							<div class="clearfix"></div>
							<div class="tag tag--partner">The Real Asset Company</div>
						</div>
					</div>
				</div>
			</div>
		</section>
			<div class="panel-controls panel-controls--purple">
				<div >
					<div class="separator" ng-class="{selected : ctrl.partnersTabs.active == 'payfriendz'}" ng-click="ctrl.setActive('partners', 'payfriendz')">Payfriendz</div>
				</div>
				<div>
					<div ng-class="{selected : ctrl.partnersTabs.active == 'durise'}" ng-click="ctrl.setActive('partners', 'durise')">Durise</div>
				</div>
				<div>
					<div class="panel-controls__item_block" ng-class="{selected : ctrl.partnersTabs.active == 'real_asset'}" ng-click="ctrl.setActive('partners', 'real_asset')">The Real Asset Company</div>
				</div>
			</div>
		</section>



		<section class="solution__section__container solution__section__container--integrations content-padding font-light" id="integration-section">
			<h2 class="solution__section__title">Integration</h2>
			<p class="solution__section__description">
			</p>
		</section>


		<section id="integration-section" class="solution__item solution__item__notfirst">
			<div id="integrations-tabs" class="solution__item__content solution__item__content--green">

				<div ng-show="ctrl.integrationsTabs.active == 'HOSTED'">
					<h2 class="solution__item__title">HOSTED</h2>
					<p class="solution__item_description" >
						Simply send users an email link to verify themselves and <br>
						evaluate and manage responses with our one-stop dashboard. <br>
						It's effective, easy and no integration is.
					</p>
				</div>
				<div ng-show="ctrl.integrationsTabs.active == 'WIDGETS'">
					<h2 class="solution__item__title">WIDGETS</h2>
					<p class="solution__item_description" >
						Access our library full of beautiful widgets - you're sure to <br>
						find one that meets your needs. Simple plug ins let you embed your chosen widget <br>
						into your site quickly, easily and without any fuss.
					</p>
				</div>
				<div ng-show="ctrl.integrationsTabs.active == 'API'">
					<h2 class="solution__item__title">API</h2>
					<p class="solution__item_description" >
						Get creative! Our API gives you complete flexibility to customise <br>
						the look and flow of your identity solution for a seamless user experience <br>
						completely tailored to your needs.
					</p>
				</div>
			</div>
		</section>
		<div class="panel-controls panel-controls--green">
			<div >
				<div class="separator" ng-class="{selected : ctrl.integrationsTabs.active == 'HOSTED'}" ng-click="ctrl.setActive('integrations', 'HOSTED')">Hosted</div>
			</div>
			<div>
				<div ng-class="{selected : ctrl.integrationsTabs.active == 'WIDGETS'}" ng-click="ctrl.setActive('integrations', 'WIDGETS')">Widgets</div>
			</div>
			<div>
				<div class="panel-controls__item_block" ng-class="{selected : ctrl.integrationsTabs.active == 'API'}" ng-click="ctrl.setActive('integrations', 'API')">API</div>
			</div>
		</div>
	</section>


</div>

<script type="text/javascript">

	function load () {
		angular.module('app').controller('SolutionsCtrl', SolutionsCtrl);

		// cached jQuery calls for performance improvements
		var $window = $(window);
		var mobile = $window.width() < 768;
		var $integration = $('#integration');
		var $integrationMobile = $('#integration-section');
		var $clientsParnters = $('#clients-partners');
		var $sectors = $('#sectors');
		var $menuContent = $('.menu-content');
		var $nav = $('nav.nav');

		var currentState;

		init();


		function init() {
			getSectionsHeight();

		}

		$window.resize(getSectionsHeight);
		function getSectionsHeight() {
			mobile = $window.width() < 768;
			integrationsHeight = $('#integration-section').offset().top - 50;
			clientsParntersHeight =  $('#clients-partners-section').offset().top - 50;
			if (mobile) {
				$nav.css('min-height', 'auto');
				$menuContent.css('height', "auto");
			}
		}

		// iife -  basically controll all the submenu behavior
		// detects current viewport section
		// #integration or #integration-section, #sectors and #clients-partners
		(function  detectCurrentSection() {

			// jQuery query caching
			var $window =  $(window);
			var $menuItems = $('.menu-content .collapsibleItem');
			var navHeight = $nav.height();
			var $menuHeight = $('.menu-content');
			var $currentState = $('.current-state');
			var fixed_header = $('nav.nav')[0];
			var lastScrollPos = $window.scrollTop();
			var t0, t1;

			$menuItems.addClass('animated');
			$window.scroll(detect);
			detect();

			function detect() {

				var scrolled = $window.scrollTop();

				// detects change on sections offset
				// updates current state
				if (scrolled < clientsParntersHeight) {
					setActiveSection('#submenu-sectors', 'SECTORS');
				} else{
					if(scrolled < integrationsHeight) {
						setActiveSection('#submenu-clients-partners', 'CLIENTS & PARTNERS');
					} else {
						setActiveSection('#submenu-integration', 'INTEGRATION');
					}
				}

				if (! mobile && scrolled) {

					// check if scrolled up or down
					if (lastScrollPos < scrolled) {
						// down
						$menuItems.removeClass('fadeIn');
						$menuItems.addClass('fadeOut');
						$currentState.css('top', "-2.58em");
						$nav.css('min-height', "2em");
						$menuContent.css('height', "2em");

						setTimeout(function () {
							// $menuContent.addClass('scrolldown');
						}, 500);

					} else {
						// up
						$menuItems.addClass('fadeIn');
						$menuItems.removeClass('fadeOut');
						$nav.css('min-height', '6em');
						$currentState.css('top', "0px");

						setTimeout(function () {
							// $menuContent.removeClass('scrolldown');
						}, 1000);
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
		})();

		function setActiveSection(sectionId, currentStateName) {
			if (currentState != sectionId) {
				$('#solutions-submenu').find('a').removeClass('active');
				$(sectionId).addClass('active');
				$('#solutions-curent-position').html(currentStateName);
			}
			currentState = sectionId;
		}

		SolutionsCtrl.$inject = [];
		function SolutionsCtrl () {
			var vm = this;

			vm.sectorsTabs = { active : 'payments' };
			vm.partnersTabs = { active : 'payfriendz' };
			vm.integrationsTabs = { active : 'HOSTED' };
			vm.menuElement = $('.menu');

			this.setActive = function (tabSection, value) {

				var top ;

				switch (tabSection) {

					case 'partners':
						vm.partnersTabs.active = value;
						top = Math.round($('#partners-tabs').offset().top - vm.menuElement.height());

						if (Math.round($window.scrollTop()) != top) {
					    	$('html, body').animate({
					        	scrollTop: top
					    	}, 1000);
						}
						break;

					case 'sectors':

						vm.sectorsTabs.active = value;
						top = Math.round($('#sectors-tabs').offset().top - vm.menuElement.height());

						if (Math.round($window.scrollTop()) != top) {
					    	$('html, body').animate({
					        	scrollTop: top
					    	}, 1000);
						}
						break;

					case 'integrations':
						vm.integrationsTabs.active = value;
						top = Math.round($('#integrations-tabs').offset().top - vm.menuElement.height());


						// not clicked && not the bottom of the page
						if (Math.round($window.scrollTop()) != top &&  !($(window).scrollTop() + $(window).height() == getDocHeight())) {
					    	$('html, body').animate({
					        	scrollTop: top
					    	}, 1000);
						}
						break;

					default:
					break;
				}
			}
		}

		function getDocHeight() {
		    var D = document;
		    return Math.max(
		        D.body.scrollHeight, D.documentElement.scrollHeight,
		        D.body.offsetHeight, D.documentElement.offsetHeight,
		        D.body.clientHeight, D.documentElement.clientHeight
		    );
		}

		$(".solutions-submenu a")
			.click(handleScroll);

		$(".dropdown-menu a")
			.click(handleScroll);

		// handles submenu clicks
		function handleScroll(event) {
			var id = $(this).attr('data-scrollTo');
			if (id) {
				event.preventDefault();
				var sectionName = id.replace('#','');

				if (mobile && sectionName == 'integration') {
					id = "#integration-section";
				}

				$('#solutions-curent-position').html(this.innerHTML);
				scrollToHash(id, 1000, mobile);
			}
		}

	}


	function scrollToHash (hash, speed, mobile) {

		if (! speed) speed = 2000;
		var offset = mobile ? 240 : 280;
		if (hash == '#integration-section') {
			offset = 20;
		}

		$('html, body').animate({
			scrollTop: ($(hash).offset().top - offset)
		}, speed);
	}

	document.addEventListener('DOMContentLoaded', load);

</script>
