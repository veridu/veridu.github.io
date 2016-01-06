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
				<br>
				<p class="solution__item_description">
					Our onboarding and identity authentication solutions are frictionless and solve the issues facing today’s eCommerce companies.
					We offer (which means you’ll offer) extensive coverage, even in thin-file markets, and greater insight into users - leading to improved good customer decline ratios.
				</p>
			</div>

			<div ng-show="ctrl.sectorsTabs.active == 'p2p'">
				<h2  class="solution__item__title">Peer To Peer</h2>
				<p class="solution__item_description">Build trust. Drive community engagement. Put members in control.</p>
				<br>
				<p class="solution__item_description">Increase trust and reduce friction with consent-based identity and insight solutions designed specifically for the needs of the sharing economy. </p>
			</div>

			<div  ng-show="ctrl.sectorsTabs.active == 'recruiting'">
				<h2  class="solution__item__title">Recruiting</h2>
				<p class="solution__item_description">Enhance candidate vetting. Identify the superstars. Make clients happy.</p>
				<br>
				<p class="solution__item_description">
					Veridu analyses an individual’s digital footprint using proprietary and sophisticated algorithms to verify their identity and match them against your eligibility criteria to single out the most wanted candidates, in real-time as they sign up or transact on your site.
				</p>
			</div>



			<div ng-show="ctrl.sectorsTabs.active == 'real_estate'">
				<h2  class="solution__item__title">Real Estate</h2>
				<p class="solution__item_description">Build a trusted business. Keep customers safe. Identify, vet and put a face on viewers.</p>
				<br>
				<p class="solution__item_description">
					Veridu helps build trust and prevent unwanted behaviour of both side of a real-estate transaction by applying our proprietary, sophisticated algorithms to analyse an individual’s digital footprint and verify their identity and credibility, in real-time as they sign up or transact on your site.
				</p>
			</div>
			<div class="solution__item__tags__container">
				<div>
					<div ng-show="ctrl.sectorsTabs.active == 'payments'">
						<p>
						</p>
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


		<section id="partners-tabs" class="solution__item solution__item__clients-partners">
			<div id="clients-partners" class="solution__item__content solution__item__content--purple">

				<div ng-show="ctrl.partnersTabs.active == 'payfriendz'">
					<h2 class="solution__item__title">Payfriendz</h2>
					<p class="solution__item_description" >
						Payfriendz is a mobile app to transfer money between friends. <br>
						What do they use Veridu for? <br>
					</p>
					<br>
					<p>
						<strong>Influencer marketing.</strong> Our social media insights help Payfriendz to identify the influencers who'll be key to growing their user base.
						<br>
						<br>
						<strong>Building trust.</strong> As the currency of peer-to-peer trust is essential to Payfriendz. Using us Payfriendz can assess the credibility of all users.
						<br>
						<br>
						<strong>Minimising fraud.</strong> Authenticating the identity of users keeps fraudsters off the Payfriendz platform allowing their business to thrive."
					</p>
				</div>
				<div ng-show="ctrl.partnersTabs.active == 'durise'">
					<h2 class="solution__item__title">Durise</h2>
					<p class="solution__item_description" >
						Durise is a Dubai based real estate crowdfunding platform. <br>
						What do they use Veridu for? <br>
					</p>
					<br>
					<p>
						<strong>Know Your Customer.</strong> Durise uses us to authenticate potential investors as they onboard to minimise fraud risk.
						<br>
						<br>
						<strong>Customer insight.</strong> With our social media insights Durise can learn more about their customers, helping to improve their marketing.
						<br>
						<br>
						<strong>Creating trust.</strong> By assessing credibility of potential investors Durise can be sure their platform becomes a trusted investment vehicle.
					</p>
				</div>
				<div ng-show="ctrl.partnersTabs.active == 'real_asset'">
					<h2 class="solution__item__title">The Real Asset Company</h2>
					<p class="solution__item_description" >
						The Real Asset Company is an innovative gold investment platform with its own cryptocurrency. <br>
						What do they use Veridu for? <br>
					</p>
					<br>
					<p>
						<strong>Anti-money laundering.</strong> Our frictionless identity checks allow The Real Asset Co maintain the integrity of their platform while keeping the user experience slick.
						<br>
						<br>
						<strong>Protecting investors.</strong> Before withdrawing currency or making a payment investors have to pass a social identity check to identify potential account takeover.
						<br>
						<br>
						<strong>Managing costs.</strong> Using our social ID checks means The Real Asset Co has a risk-based identity solution, with extensive global coverage, at a fraction of the price.
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
		</section>


		<section class="solution__item solution__item--integration">
			<div id="integrations-tabs" class="solution__item__content solution__item__content--green">

				<div ng-show="ctrl.integrationsTabs.active == 'HOSTED'">
					<h2 class="solution__item__title">Hosted</h2>
					<p class="solution__item_description" >
						Simply send users to our gateway via a button or an email link to verify themselves and evaluate and manage responses with our one-stop dashboard. It's effective, easy and no integration is needed.
						<br>
						<br>
						<strong>No development:</strong> As it works without the need for technical integration our hosted service is ideal if you have a small volume of users you want to verify or if you simply want to get started faster than your technical team is able to support.
						<br>
						<br>
						<strong>Start verifying, now!:</strong> send the link to your users and you could start verifying your users today
					</p>
				</div>
				<div ng-show="ctrl.integrationsTabs.active == 'WIDGETS'">
					<h2 class="solution__item__title">Widgets</h2>
					<p class="solution__item_description" >
						Access our library full of beautiful widgets - you're sure to find one that meets your needs. Simple plug ins let you embed your chosen widget into your site quickly, easily and without any fuss.
						<br>
						<br>
						<strong>Integrate with a single button:</strong> add sign-in or challenge button to your site to start verifying your visitors on your site now
						<br>
						<br>
						<strong>Make verifications pop:</strong> whether is seamless login or a verification challenge your looking for our widgets can pop up beatifully on your existing site
					</p>
				</div>
				<div ng-show="ctrl.integrationsTabs.active == 'API'">
					<h2 class="solution__item__title">API</h2>
					<p class="solution__item_description" >
						Get creative! Our API gives you complete flexibility to customise
						the look and flow of your identity solution for a seamless user experience
						completely tailored to your needs.
						<br>
						<br>
						<strong>Be unique:</strong> want to keep the experience on your site unique? Not a problem using our APIs you can integrate our services without the user needing to leave your carefully crafted online experience.
						<br>
						<br>
						<strong>We've got an SDK for that:</strong> with an ever growing number of Software Development Kits available to you, chances are that we've got exactly what your developers are looking for to integrate with.
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
		var mbHelper =  $('#mobile-indicator');
		var mobile = mbHelper.is(':visible');
		var $integration = $('#integration');
		var $integrationMobile = $('#integration-section');
		var $clientsParnters = $('#clients-partners');
		var $sectors = $('#sectors');
		var $menuContent = $('.menu-content');
		var $nav = $('nav.nav');
		var items = $('.solution__item');
		var currentState;

		init();

		function init() {
			getSectionsHeight();
		}

		function resizeContainers(cb) {
			items.map(function(index, item) {
				var $item = $(item);
				var visHeight = $item.find('.solution__item__content  div:visible:first').height();
				var tagsCHeight = $item.find('.solution__item__tags__container').height();

				$item.height(tagsCHeight + visHeight + 250);
				if (typeof(cb) == 'function') {
					cb();
				}
			});
		}

		$window.resize(getSectionsHeight);
		function getSectionsHeight() {

			resizeContainers();

			mobile = mbHelper.is(':visible');
			integrationsHeight = $('#integration-section').offset().top - 650;

			clientsParntersHeight =  $('#clients-partners-section').offset().top - 550;
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
			var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

			function detect() {

				var scrolled = $window.scrollTop();

				// detects change on sections offset
				// updates current state
				if (scrolled < clientsParntersHeight) {
					setActiveSection('#submenu-sectors', 'SECTORS');
				} else{
					if(scrolled < integrationsHeight - 100) {
						setActiveSection('#submenu-clients-partners', 'CLIENTS & PARTNERS');
					} else {
						setActiveSection('#submenu-integration', 'INTEGRATION');
					}
				}

				var scrollT;

				function hideSubmenu() {
					$menuItems.removeClass('fadeIn');
					$menuItems.addClass('fadeOut');
					$currentState.css('top', "-2.58em");
					$nav.css('min-height', "2em");
					$menuContent.css('height', "2em");
				}

				function showSubmenu() {
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
		})();

		var videos = {
			'payments': document.getElementById('video-solutions-customer'),
			'p2p': document.getElementById('video-solutions-peer'),
			'recruiting': document.getElementById('video-solutions-candidate'),
			'real_estate': document.getElementById('video-solutions-tenant')
		};
		var lastActiveVideo = 'payments';

		function setActiveSection(sectionId, currentStateName) {
			if (currentState != sectionId) {
				$('#solutions-submenu').find('a').removeClass('active');
				$(sectionId).addClass('active');
				$('#solutions-curent-position').html(currentStateName);
			}
			currentState = sectionId;
		}

		SolutionsCtrl.$inject = ['$timeout'];
		function SolutionsCtrl ($timeout) {
			var vm = this;
			vm.setActive = setActive;
			vm.menuElement = $('.menu');
			vm.sectorsTabs = { active : 'payments'};
			vm.partnersTabs = { active : 'payfriendz' };
			vm.integrationsTabs = { active : 'HOSTED'};
			$timeout(function () {
				resizeContainers();
			});


			videos[lastActiveVideo].play();

			function setActive (tabSection, value) {

				var top ;

				switch (tabSection) {

					case 'partners':
						vm.partnersTabs.active = value;
						$timeout(function (){
							resizeContainers(function (argument) {
								top = Math.round($('#partners-tabs').offset().top - vm.menuElement.height());
								if (Math.round($window.scrollTop()) != top) {
									$('html, body').animate({
										scrollTop: top
									}, 500);
								}
							});
						});

						break;
					case 'sectors':

						vm.sectorsTabs.active = value;
						videos[lastActiveVideo].pause();
						videos[value].play();

						$timeout(function (){
							resizeContainers();
							top = Math.round($('#sectors-tabs').offset().top - vm.menuElement.height());

							if (Math.round($window.scrollTop()) != top) {
								$('html, body').animate({
									scrollTop: top
								}, 500);
							}
						}, 500);


						break;

					case 'integrations':

						vm.integrationsTabs.active = value;

						$timeout(function (){
							resizeContainers();
							top = Math.round($('#integrations-tabs').offset().top - vm.menuElement.height());
							// not clicked && not the bottom of the page
							if (Math.round($window.scrollTop()) != top &&  !($(window).scrollTop() + $(window).height() == getDocHeight())) {
								$('html, body').animate({
									scrollTop: top
								}, 500);
							}
						}, 500);


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

		$("#footer-solutions a")
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
				scrollToHash(id, 500, mobile);
			}
		}

	}


	function scrollToHash (hash, speed, mobile) {

		if (! speed) speed = 500;
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
