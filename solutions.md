---
title: Solutions
layout: blank
class: solutions
description: What company doesn't want to know their users better? These are just some of the sectors we work with so if you don't see yours listed get in touch, we love to talk.
---
<div ng-controller="SolutionsCtrl as ctrl">

	<section class="solution__section__container content-padding font-light">
		<h2 class="solution__section__title">Sectors</h2>
		<p class="solution__section__description">
			What company doesn't want to know their users better? These are just some of the sectors we work with so if you don't see yours listed get in touch, we love to talk.
		</p>
	</section>


	<section id="sectors-tabs" class="solution__item">
		<div id="sectors" class="solution__item__content">
			<div ng-show="ctrl.sectorsTabs.active == 'payments'" >
				<h2  class="solution__item__title">Payments</h2>
				<p class="solution__item_description">Verify identity better globally. Decline fewer transactions. Improve user experience.</p>
			</div>

			<div ng-show="ctrl.sectorsTabs.active == 'p2p'">
				<h2  class="solution__item__title">Peer to Peer</h2>
				<p class="solution__item_description">Build trust. Drive community engagement. Put members in control.</p>
			</div>

			<div ng-show="ctrl.sectorsTabs.active == 'recruiting'">
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
			<div ng-class="{selected : ctrl.sectorsTabs.active == 'payments'}" ng-click="ctrl.setActive('sectors', 'payments')">PAYMENTS</div>
		</div>
		<div >
			<div ng-class="{selected : ctrl.sectorsTabs.active == 'recruiting'}" ng-click="ctrl.setActive('sectors', 'recruiting')">RECRUITING</div>
		</div>
		<div >
			<div ng-class="{selected : ctrl.sectorsTabs.active == 'p2p'}" ng-click="ctrl.setActive('sectors', 'p2p')">PEER TO PEER</div>
		</div>
		<div >
			<div ng-class="{selected : ctrl.sectorsTabs.active == 'real_estate'}" ng-click="ctrl.setActive('sectors', 'real_estate')">REAL ESTATE</div>
		</div>
	</div>

	<section class="solution__section__container solution__section__container--clients-partners content-padding font-light">
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
					<a href="#" class="white-link">READ MORE</a>
				</p>
			</div>
			<div ng-show="ctrl.partnersTabs.active == 'durise'">
				<h2 class="solution__item__title">Durise</h2>
				<p class="solution__item_description" >
					Durise is a Dubai based real estate crowdfunding platform. <br>
					What do they use Veridu for? <br>
					<a href="#" class="white-link">READ MORE</a>
				</p>
			</div>
			<div ng-show="ctrl.partnersTabs.active == 'real_asset'">
				<h2 class="solution__item__title">Real Asset Company</h2>
				<p class="solution__item_description" >
					The Real Asset Company is an innovative gold investment platform with its own cryptocurrency. <br>
					What do they use Veridu for? <br>
					<a href="#" class="white-link">READ MORE</a>
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
			<div>
				<div ng-class="{selected : ctrl.partnersTabs.active == 'payfriendz'}" ng-click="ctrl.setActive('partners', 'payfriendz')">WORLDPAY</div>
			</div>
			<div>
				<div ng-class="{selected : ctrl.partnersTabs.active == 'durise'}" ng-click="ctrl.setActive('partners', 'durise')">DURISE</div>
			</div>
			<div>
				<div class="panel-controls__item_block" ng-class="{selected : ctrl.partnersTabs.active == 'real_asset'}" ng-click="ctrl.setActive('partners', 'real_asset')">THE REAL ASSET COMPANY</div>
			</div>
		</div>
	</section>
	<section class="integration veridu-list">
	    <h2 class="font-light">Integration</h2>

		<div class="visible-xs">
		    <div class="item-container">
		        <h3>HOSTED</h3>
		        <p>Simply send users an email link to verify themselves and evaluate and manage responses with our one-stop dashboard. It's effective, easy and no integration is.</p>
		    </div>

		    <div class="item-container">
		        <h3>WIDGETS</h3>
		        <p>Access our library full of beautiful widgets - you're sure to find one that meets your needs. Simple plug ins let you embed your chosen widget into your site quickly, easily and without any fuss.</p>
		    </div>

		    <div class="item-container">
		        <h3>API</h3>
		        <p>Get creative! Our API gives you complete flexibility to customise the look and flow of your identity solution for a seamless user experience completely tailored to your needs.</p>
		    </div>
		</div>

		<section id="integrations-tabs" class="solution__item solution__item__notfirst hidden-xs">
			<div id="integration" class="solution__item__content solution__item__content--grey">

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
		<div class="panel-controls panel-controls--grey hidden-xs">
			<div>
				<div ng-class="{selected : ctrl.integrationsTabs.active == 'HOSTED'}" ng-click="ctrl.setActive('integrations', 'HOSTED')">HOSTED</div>
			</div>
			<div>
				<div ng-class="{selected : ctrl.integrationsTabs.active == 'WIDGETS'}" ng-click="ctrl.setActive('integrations', 'WIDGETS')">WIDGETS</div>
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

		SolutionsCtrl.$inject = [];
		function SolutionsCtrl () {
			var vm = this;

			vm.sectorsTabs = { active : 'payments' };
			vm.partnersTabs = { active : 'payfriendz' };
			vm.integrationsTabs = { active : 'HOSTED' };
			vm.menuElement = $('.menu');

			this.setActive = function (tabSection, value) {

				switch (tabSection) {

					case 'partners':
						vm.partnersTabs.active = value;
					    $('html, body').animate({
					        scrollTop: ($('#partners-tabs').offset().top - vm.menuElement.height())
					    }, 1000);
						break;

					case 'sectors':
						vm.sectorsTabs.active = value;
					    $('html, body').animate({
					        scrollTop: ($('#sectors-tabs').offset().top - vm.menuElement.height())
					    }, 1000);
						break;

					case 'integrations':
						vm.integrationsTabs.active = value;
					    $('html, body').animate({
					        scrollTop: ($('#integrations-tabs').offset().top - vm.menuElement.height())
					    }, 1000);
						break;

					default:
					break;
				}
			}
		}


		$(".solutions-submenu a").click(handleScroll);

		// handles submenu clicks
		function handleScroll(event) {
			var id = $(this).attr('data-scrollTo');

			if (id) {
				event.preventDefault();
				$('#pricing-curent-position').text(id.replace('#',''));
				scrollToHash(id);
			}
		}

	}

	function scrollToHash (hash, speed) {
		if (! speed) speed = 2000;

		$('html, body').animate({
			scrollTop: ($(hash).offset().top - 260)
		}, 2000);
	}

	document.addEventListener('DOMContentLoaded', load);

</script>
