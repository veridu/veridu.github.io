---
title: Sectors
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


	<section class="solution__item">
		<div class="solution__item__content">
			<h2 ng-show="ctrl.sectorsTabs.active == 'payments'" class="solution__item__title">Payments</h2>
			<h2 ng-show="ctrl.sectorsTabs.active == 'recruiting'" class="solution__item__title">Recruiting</h2>
			<h2 ng-show="ctrl.sectorsTabs.active == 'p2p'" class="solution__item__title">Peer to Peer</h2>
		    <p class="solution__item_description">Build trust. Drive community engagement. Put members in control.
		    </p>
			<h2 ng-show="ctrl.sectorsTabs.active == 'real_estate'" class="solution__item__title">Real Estate</h2>
			  <p class="solution__item_description">Verify identity better globally. Decline fewer transactions. Improve user experience.
			</p>
			<div class="solution__item__tags__container">
				<div ng-show="ctrl.sectorsTabs.active == 'payments'">
					<div class="tag tag--purple">World Pay</div>
					<div class="tag tag--purple">PayFriendz</div>
					<div class="tag tag--purple">ZipMoney</div>
					<div class="clearfix"></div>			
					<div class="tag tag--green">Social Media & Online Services</div>
					<div class="tag tag--green">Knowledge-based Authentication</div>
					<div class="clearfix"></div>			
					<div class="tag tag--bluegreen">Contact Info</div>
					<div class="tag tag--bluegreen">Age</div>
					<div class="tag tag--bluegreen">Insight</div>
					<div class="clearfix"></div>			
					<div class="tag tag--grey">API</div>
				</div>
				<div  ng-show="ctrl.sectorsTabs.active == 'recruiting'">
					<div class="tag tag--purple">World Pay</div>
					<div class="clearfix"></div>			
					<div class="tag tag--green">Knowledge-based Authentication</div>
					<div class="clearfix"></div>			
					<div class="tag tag--bluegreen">Contact Info</div>
					<div class="tag tag--bluegreen">Insight</div>
					<div class="clearfix"></div>			
					<div class="tag tag--grey">API</div>
				</div>
				<div  ng-show="ctrl.sectorsTabs.active == 'p2p'">
					<div class="tag tag--purple">World Pay</div>
					<div class="clearfix"></div>			
					<div class="tag tag--green">Social Media & Online Services</div>
					<div class="clearfix"></div>			
					<div class="tag tag--bluegreen">Contact Info</div>
					<div class="clearfix"></div>			
					<div class="tag tag--grey">API</div>
				</div>
				<div  ng-show="ctrl.sectorsTabs.active == 'real_estate'">
					<div class="tag tag--purple">ZipMoney</div>
					<div class="clearfix"></div>			
					<div class="tag tag--green">Social Media & Online Services</div>
					<div class="tag tag--green">Knowledge-based Authentication</div>
					<div class="clearfix"></div>			
					<div class="tag tag--bluegreen">Contact Info</div>
					<div class="tag tag--bluegreen">Age</div>
					<div class="tag tag--bluegreen">Insight</div>
					<div class="clearfix"></div>			
					<div class="tag tag--grey">API</div>
				</div>
			</div>
		</div>
	</section>
	<div class="panel-controls">

		<div ng-class="{selected : ctrl.sectorsTabs.active == 'payments'}" ng-click="ctrl.sectorsTabs.active = 'payments'">PAYMENTS</div>
		<div ng-class="{selected : ctrl.sectorsTabs.active == 'recruiting'}" ng-click="ctrl.sectorsTabs.active = 'recruiting'">RECRUITING</div>
		<div ng-class="{selected : ctrl.sectorsTabs.active == 'p2p'}" ng-click="ctrl.sectorsTabs.active = 'p2p'">PEER TO PEER</div>
		<div ng-class="{selected : ctrl.sectorsTabs.active == 'real_estate'}" ng-click="ctrl.sectorsTabs.active = 'real_estate'">REAL ESTATE</div>
		
	</div>

	<section class="solution__section__container content-padding font-light">
		<h2 class="solution__section__title">Clients & Partners</h2>
		<p class="solution__section__description">
			We're proud to be working with some truly innovative companies, both big and growing. Here's a taster of how we're working together.
		</p>
	</section>


	<section class="solution__item solution__item__notfirst">
		<div class="solution__item__content solution__item__content--purple">
			<h2 ng-show="ctrl.partnersTabs.active == 'payfriendz'" class="solution__item__title">Payfriendz</h2>
			<h2 ng-show="ctrl.partnersTabs.active == 'recruiting'" class="solution__item__title">Recruiting</h2>
			<h2 ng-show="ctrl.partnersTabs.active == 'p2p'" class="solution__item__title">Peer to Peer</h2>
			<h2 ng-show="ctrl.partnersTabs.active == 'real_estate'" class="solution__item__title">Real Estate</h2>
			<p class="solution__item_description" ng-show="ctrl.partnersTabs.active == 'payfriendz'">
				Payfriendz is a mobile app to transfer money between friends. <br> 
				What do they use Veridu for? <br>
				<a href="#" class="white-link">READ MORE</a>
			</p>
			<p class="solution__item_description" ng-show="ctrl.partnersTabs.active == 'recruiting'">Recruiting
			  Enhance candidate vetting. Identify the superstars. Make clients happy. <br>
				<a href="#" class="white-link">READ MORE</a>
			</p>
			<p class="solution__item_description" ng-show="ctrl.partnersTabs.active == 'p2p'">Peer to Peer</p>
			<p class="solution__item_description" ng-show="ctrl.partnersTabs.active == 'real_estate'">Real Estate</p>
			<div class="solution__item__tags__container">
				<div ng-show="ctrl.partnersTabs.active == 'payfriendz'">
					<div class="tag tag--blue">Payments</div>
					<div class="clearfix"></div>			
					<div class="tag tag--green">Social Media & Online Services</div>
					<div class="tag tag--green">Knowledge-based Authentication</div>
					<div class="clearfix"></div>			
					<div class="tag tag--bluegreen">Contact Info</div>
					<div class="tag tag--bluegreen">Age</div>
					<div class="tag tag--bluegreen">Insight</div>
					<div class="clearfix"></div>			
					<div class="tag tag--grey">API</div>
				</div>
				<div  ng-show="ctrl.partnersTabs.active == 'recruiting'">
					<div class="tag tag--purple">World Pay</div>
					<div class="clearfix"></div>			
					<div class="tag tag--green">Knowledge-based Authentication</div>
					<div class="clearfix"></div>			
					<div class="tag tag--bluegreen">Contact Info</div>
					<div class="tag tag--bluegreen">Insight</div>
					<div class="clearfix"></div>			
					<div class="tag tag--grey">API</div>
				</div>
				<div  ng-show="ctrl.partnersTabs.active == 'p2p'">
					<div class="tag tag--purple">World Pay</div>
					<div class="clearfix"></div>			
					<div class="tag tag--green">Social Media & Online Services</div>
					<div class="clearfix"></div>			
					<div class="tag tag--bluegreen">Contact Info</div>
					<div class="clearfix"></div>			
					<div class="tag tag--grey">API</div>
				</div>
				<div  ng-show="ctrl.partnersTabs.active == 'real_estate'">
					<div class="tag tag--purple">ZipMoney</div>
					<div class="clearfix"></div>			
					<div class="tag tag--green">Social Media & Online Services</div>
					<div class="tag tag--green">Knowledge-based Authentication</div>
					<div class="clearfix"></div>			
					<div class="tag tag--bluegreen">Contact Info</div>
					<div class="tag tag--bluegreen">Age</div>
					<div class="tag tag--bluegreen">Insight</div>
					<div class="clearfix"></div>			
					<div class="tag tag--grey">API</div>
				</div>
			</div>
		</div>
	</section>
	<div class="panel-controls">

		<div ng-class="{selected : ctrl.partnersTabs.active == 'payfriendz'}" ng-click="ctrl.partnersTabs.active = 'payfriendz'">WORLDPAY</div>
		<div ng-class="{selected : ctrl.partnersTabs.active == 'recruiting'}" ng-click="ctrl.partnersTabs.active = 'recruiting'">DURISE</div>
		<div class="panel-controls__item_block" ng-class="{selected : ctrl.partnersTabs.active == 'real_estate'}" ng-click="ctrl.partnersTabs.active = 'real_estate'">THE REAL ASSET COMPANY</div>
	</div>


<section class="integration veridu-list">
    <h2 class="font-light">Integration</h2>    
        
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

</section>

</div>

<script type="text/javascript">
		
	function load () {

		angular
			.module('app')
			.controller('SolutionsCtrl', SolutionsCtrl);

		SolutionsCtrl.$inject = [];
		function SolutionsCtrl () {
			var vm = this;

			vm.sectorsTabs = { active : 'payments' };
			vm.partnersTabs = { active : 'payfriendz' };
		}

	}
	
	/*
		'payments' : {
		label: 'Payments',
		items: {
			purple: ['WorldPay', 'PayFriendz', 'ZipMoney'],
			green: ['Knowledge-based Authentication', 'Social Media & Online Services'],
			bluegreen: ['Contact Info', 'Age', 'Insight'],
			grey: ['API']

		}
	*/
	document.addEventListener('DOMContentLoaded', load);

</script>
