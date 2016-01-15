---
title: Article
layout: blank
class: article
cover: img/bridge.jpeg
---

<article>
	<div class="article__body">

		<div class="article__cover">
			<div class="article__cover__img_container">
				<img src="{{page.cover}}">
				<div class="article__cover__img_overlay" >
				</div>
			</div>
			<div class="article__call__container">
				<h1 class="article__title">Know Your Customer</h1>
				<h4 class="article__excerpt hidden-xs">
					You can have it all. Robust identity verification globally, <br> fewer declined transactions and an improved user <br> experience.
				</h4>
			</div>
		</div>

		<h4 class="article__excerpt visible-xs">
			You can have it all. Robust identity verification globally, fewer declined transactions and an improved user experience.
		</h4>

		<div class="article__content-wrapper">
			<p class="article__content">
				“Veridu rocks! Especially for our customers who sell high value goods online. The team has been beyond helpful and responsive to our needs.” - CEO, SimpleShop
				<br>
				<br>
				WorldPay PayFriendz ZipMoney Knowledge-based Authentication “We love the frictionless user experience. If you have a consumer facing mobile app and need to integrate identity services I highly recommend checking out Veridu.” - CEO, PayFriendz
				<br>
				<br>
				Contact Info Age Social Media & Online Services Insight API "Veridu gives us much lower transactional risk and significantly better insight on our customers." - CEO, The Real Asset Company
				<br>
				<br>
				Conduct frictionless and cost-effective identity verification globally, even in high risk markets.
				<br>
				<br>
				Reduce false positive declines and recover transactions that your risk rules would normally decline.
				<br>
				<br>
				Spend less time and money on fraud reviews with better tools and user insight.
			</p>

			<div class="article__tags__container">

				<h5>TAGS</h5>

				<div class="tag tag--partner">World Pay</div>
				<div class="tag tag--partner">PayFriendz</div>
				<div class="tag tag--partner">ZipMoney</div>
				<div class="clearfix"></div>
				<div class="tag tag--sources">Social Media & Online Services</div>
				<div class="tag tag--sources">Knowledge-based Authentication</div>
				<div class="clearfix"></div>
				<div class="tag tag--scores">Contact Info</div>
				<div class="tag tag--scores">Age</div>
				<div class="tag tag--scores">Insight</div>
				<div class="clearfix"></div>
				<div class="tag tag--integration">API</div>
			</div>
		</div>
	</div>
</article>


<script type="text/javascript">

	function load () {

		angular
			.module('app')
			.controller('SolutionsCtrl', SolutionsCtrl);

		var $window = $(window);
		var $cover = $('.article__cover');

		SolutionsCtrl.$inject = [];
		function SolutionsCtrl () {
			var vm = this;

			vm.sectorsTabs = { active : 'payments' };
			vm.partnersTabs = { active : 'payfriendz' };
		}

		$cover.css('height', ($window.height() * 2 /3));

		$window.resize(function() {
			$cover.css('height', ($window.height() * 2 /3));
		});

	}

	document.addEventListener('DOMContentLoaded', load);

</script>
